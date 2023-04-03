require('dotenv').config();

const Sequelize = require('sequelize');
const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USERNAME}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
  password: DB_PASSWORD,
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to ${sequelize.options.dialect} database.`);
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
