const puppeteer = require('puppeteer');

async function run(){

	// Run in the background (headless mode)
	const browser = await puppeteer.launch({ headless: false, slowMo: true });

// Navigate to Google
const page = await browser.newPage();
await page.setViewport({
  width: 1000,
  height: 600,
  deviceScaleFactor: 1,
});
// https://pratagy.letsbook.com.br/D/Reserva?checkin=29%2F03%2F2023&checkout=30%2F03%2F2023&cidade=&hotel=12&adultos=2&criancas=&destino=Pratagy+Beach+Resort+All+Inclusive&promocode=&tarifa=&mesCalendario=6%2F14%2F2022
await page.goto('https://pratagy.letsbook.com.br/D/Reserva?checkin=01%2F05%2F2023&checkout=12%2F05%2F2023&cidade=&hotel=12&adultos=2&criancas=&destino=Pratagy+Beach+Resort+All+Inclusive&promocode=&tarifa=&mesCalendario=4%2F14%2F2023');


let item 
await new Promise(resolve => setTimeout(resolve, 3500));
await page.evaluate(()=>{
  // item = document.querySelector('.lb-modal_close')
  // document.querySelector('#hotel-selecionado-indisponivel > button.lb-modal_close')
  if (document.querySelector('#hotel-selecionado-indisponivel > button.lb-modal_close') == true)
  document.querySelector('#hotel-selecionado-indisponivel > button.lb-modal_close').click()
  document.querySelector('#infochat_close_message').click()

  item = document.querySelector('#acomodacoesWrapper')
  itens = document.querySelectorAll('#tblAcomodacoes > tbody > tr');
  tableAcomodacoes = document.querySelector('#tblAcomodacoes')
  tableChuck = document.querySelector('#tblChuckNorris')
  
  console.log(item)
  console.log(itens)
  console.log([{
    item,
    itens,
    tableAcomodacoes,
    tableChuck}
  ])
})
// TARGET 
// #acomodacoesWrapper

// await browser.close();
}


try {
	run()	
} catch (error) {
	console.error(error)
}finally{
	console.log("terminou")
}