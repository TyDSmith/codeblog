var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Killmonger1!",
  database: "bloggers_db"
});

connection.connect(function (err) {
  if (err) {
    console.log("(ノ°益°)ノ");
    return;
  }
  console.log("MySQL Connected: " + connection.threadId);
});

module.exports = connection;
