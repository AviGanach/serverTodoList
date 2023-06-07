const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize('to_do_listDB', 'postgres',  process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });


module.exports = sequelize;
