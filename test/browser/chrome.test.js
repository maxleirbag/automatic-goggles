const chrome = require('../../services/BrowserService')

test('abrir chrome',async ()=>{

	const a = await chrome.getBrowser();
	console.log(a)
	expect(a).toBeTruthy()
})

test('fechar chrome', async () =>{
	const b = await chrome.closeBrowser();
	console.log(b);
	expect(b).toBeFalsy()
})