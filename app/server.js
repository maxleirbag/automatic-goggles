const express = require('express');
const searchRouter = require('../routes/searchRoute.js');

const startServer = () => {
  const app = express();
  app.use(express.json());

  app.use('/search', searchRouter);

  return app;
};

module.exports = startServer;
