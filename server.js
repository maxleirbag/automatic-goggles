require('dotenv').config();
const express = require('express');
const app = express();
const searchRouter = require('./routes/searchRoute.js');

const SERVER_PORT = process.env.SERVER_PORT || 3006;

app.use(express.json());
app.use('/search', searchRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
