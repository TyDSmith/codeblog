// "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


var mysql = require('mysql');

var connection = mysql.createConnection({

    host: "localhost",
    user: "ty",
    password: "password",
    database: "test_db_blog"


//   host: "http://v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/",
//   user: "d8sfxcrhux4qrfh8",
//   password: "na0qh0mw3v80fvu7",
//   database: "pq207a6dbgeya65s",
//   port: 3306
});

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM Blogs", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

module.exports = connection;