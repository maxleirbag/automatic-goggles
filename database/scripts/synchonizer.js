
(async () => {
	const database = require('../config/config');
	try {
		const result = await database.sync({ force: true });
		console.log(result);
	} catch (error) {
		console.log(error);
	}
})();