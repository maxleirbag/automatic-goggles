const puppeteer = require('puppeteer');

class LetsbookDataScraper {
  constructor() {
    this.rooms = [];
  }

  async storeData(data){
    this.rooms = data;
  }

  async getDescriptions(page){
    let descriptions = []
    descriptions = await page.evaluate(()=>{
      let descriptionsElements = document.getElementsByClassName('quartoContent')
      let textDescriptions = Array.from(descriptionsElements).map(el => el.innerText)
      return textDescriptions
    })
    return descriptions
  }

  async getPrices(page){
    let prices = []
    prices = await page.evaluate(()=> {
      const pricesElements = document.getElementsByClassName('precoQuarto')
      const pricesText = Array.from(pricesElements).map(el => el.innerText)
      const textPhrases = pricesText.map((text)=> text.split('\n'))
      const amountOfPhrases = textPhrases.map((text)=> text.length );
      const bestPrice = textPhrases.map((text,i)=> text[amountOfPhrases[i]-2]) 
      return bestPrice
    })
    return prices
  }

  async getImages(room, page){
    let images = [] 
    images = await page.evaluate((room)=> {
      const imagesElements = Array.from(room.getElementsByClassName('room--image'));
      const imagesLinks = imagesElements.map((el) => el.dataset.src)
      return imagesLinks
    }, room) 
    return images
  }

  async getNames(room){
    const name = await room.$eval('td.tdQuarto > div > div.flex-table-row > span', el => el.innerText);
    return name
  }

  async scrapeData() {
    const browser = await puppeteer.launch({headless: true });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1000,
      height: 600,
      deviceScaleFactor: 1,
    });
    
    // QUERY OBJECT
    await page.goto('https://pratagy.letsbook.com.br/D/Reserva?checkin=01%2F05%2F2023&checkout=12%2F05%2F2023&cidade=&hotel=12&adultos=2&criancas=&destino=Pratagy+Beach+Resort+All+Inclusive&promocode=&tarifa=&mesCalendario=4%2F14%2F2023');
    // await page.goto('https://royalmacae.letsbook.com.br/D/Reserva?checkin=25%2F04%2F2023&checkout=29%2F04%2F2023&cidade=&hotel=12&adultos=1&criancas=&destino=Royal+Maca%C3%A9+Palace+Hotel&promocode=&tarifa=&mesCalendario=3%2F1%2F2023')
  
    await page.waitForSelector('#tblAcomodacoes');

    const roomNodes = await page.$$('#tblAcomodacoes > tbody > tr');
    let roomsInformation = []
    
    const descriptions = await this.getDescriptions(page)
    const prices = await this.getPrices(page)

    for (let i = 0; i < roomNodes.length; i++) {
      const description = descriptions[i]
      const price = prices[i]
      
      const room =  roomNodes[i]
      const name = await this.getNames(room)
      
      let images = await this.getImages(room, page)

      roomsInformation.push({name, description, price, images});
    }
    await this.storeData(roomsInformation)   
  }
}

module.exports = LetsbookDataScraper;