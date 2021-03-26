const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1&",
  database: "to_do_list"
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to database works!");
});

module.exports = db;

//mis à jour