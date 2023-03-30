const cheerio = require('cheerio')
const axios = require('axios')

const url='http://books.toscrape.com/catalogue/category/books/travel_2/index.html'

async function getGenre(){
	try {
		const response = await axios.get(url)
		const dom = cheerio.load(response.data);
		// console.log(dom)
		const genre = dom('h1').text() // #default > div > div > div > div > div.page-header.action > h1
		console.log(genre);
	} catch (error) {
		console.error(error)
	}
}

getGenre()