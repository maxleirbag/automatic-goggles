const puppeteer = require('puppeteer');

async function run(){

	// Run in the background (headless mode)
	const browser = await puppeteer.launch({ headless: false, slowMo: true });

// Navigate to Google
const page = await browser.newPage();
await page.goto('https://google.com');

// Type "JavaScript" into the search bar
await page.evaluate(() => {
  document.querySelector('input[name="q"]').value = 'JavaScript';
});

// Click on the "Google Search" button and wait for the page to load
await Promise.all([
  page.waitForNavigation(),
  page.evaluate(() => {
    document.querySelector('input[value="Pesquisa Google"]').click();
  })
]);

// Get all the search result URLs
const links = await page.evaluate(function getUrls() {
  return Array.from(document.querySelectorAll('a cite').values()).
    map(el => el.innerHTML);
});
console.log(links)

await browser.close();
}


try {
	run()	
} catch (error) {
	console.error(error)
}finally{
	console.log("terminou")
}