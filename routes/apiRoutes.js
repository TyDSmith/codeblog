var connection = require("../config/connection");
var db = require("../models");
// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3000,
//   user: "webuser",
//   password: "UCR",
//   database: "bloggers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//       console.log("(ノ°益°)ノ");
//       return;
//   }
//   console.log("MySQL Connected: "
//   + connection.threadId);
// });


module.exports = function(app) {
  app.get("/api/blog", function(req, res) {
    console.log("howdy");
    var sql = "SELECT * FROM Blogs;"
    connection.query(sql, function(err, sqlResult){
      console.log("oof");
      if (err) {
          console.log("(ノ°益°)ノ");
          throw err;
      }
      res.json(sqlResult);
    });
  });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
