const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crud",
});

module.exports = pool.promise();
