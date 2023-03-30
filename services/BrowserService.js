const puppeteer = require('puppeteer');

class BrowserService {

    static async crawlHotelList(){
        const examplePayload =  {
            "checkin": "2021-07-01", 
            "checkout": "2021-07-03"
        }
        // GET 
        // 
        // POST
        // body {
        //     "name": string, // Room name
        //     "description": string,  // Room description
        //     "price": string, // Room daily price
        //     "image": string, // Room main photo
        // }

        const hotelObjectsList = [{
            "name": "STUDIO CASAL",
            "description": "Apartamentos localizados no prédio principal do Resort, próximos a recepção e a área de convivência, com vista para área de estacionamento não possuem varanda. Acomoda até 1 adulto e 1 criança ou 2 adultos", 
            "price": "R$ 1.092,00",
            "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/30/fotoprincipal.jpg"
        },
        {
            "name": "CABANA",
            "description": "Apartamentos espalhados pelos jardins do Resort, com vista jardim possuem varanda. Acomoda até 4 adultos ou 3 adultos e 1 criança ou 2 adultos e 2 criança ou 1 adulto e 3 crianças, em duas camas casal.", 
            "price": "R$ 1.321,00",
            "image": "https://letsimage.s3.amazonaws.com/letsbook/193/quartos/32/fotoprincipal.jpg"
        }]
        

        return hotelObjectsList
    }

    static async discoverWhichGenre(){
        const browser = await this.browser();
        const page = await browser.newPage();
        await page.goto('http://books.toscrape.com/catalogue/category/books/travel_2/index.html')
        const element = await page.waitForSelector('#default > div > div > div > div > div.page-header.action > h1')
        console.log(element)
        await this.closeBrowser();
    }

static async capturarPaginaComElemento(){
    const browser = await this.getBrowser()
    const page = await browser.newPage();
    await page.goto('https://www.speedtest.net/pt').then(()=> console.log('chegou na página'));
    await page.screenshot({path: 'exemplo.png'})
    // const element = await page.waitForSelector('#container > div > div.main-content > div');
    const element = await page.waitForSelector('#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.start-button > a > span.start-text');
    const caixa = await element.boxModel();


    console.log([element, caixa])
    // Do something with element...
    // await element.click(); // Just an example.
    // // Dispose of handle
    // await element.dispose();
    // Close browser.
    await this.closeBrowser(browser)
    return element
  }

    static getBrowser() {
        return puppeteer.launch({headless: false});
    }

    static closeBrowser(browser) {
        if (!browser) {
            return;
        }
        return browser.close();
    }
}

module.exports = BrowserService;
