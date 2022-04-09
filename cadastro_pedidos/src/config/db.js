const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'Douglas123@',
  host: 'localhost',
  port: 5432,
  database: 'pedidos'
});
