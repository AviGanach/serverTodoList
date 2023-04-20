const { Client } = require('pg');
require('dotenv').config();

 
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'to_do_listDB',
  password: process.env.PASSWORD,
  port: 5432, // or your PostgreSQL port
});



client.connect(()=>{console.log('connect');})

module.exports = client;