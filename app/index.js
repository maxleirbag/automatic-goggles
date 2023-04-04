require('dotenv').config();
const startServer = require('./server.js');
const app = startServer();

const SERVER_PORT = process.env.SERVER_PORT || 3006;

app.listen(SERVER_PORT, () => {
  console.log('Server is listening on port', SERVER_PORT);
});
