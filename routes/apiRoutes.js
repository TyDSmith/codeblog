// var db = require("../models");
var axios = require("axios");
// import $ from 'jquery';
var connection = require('../server')


module.exports = function(app) {
  app.get("/api/blog", function(req, res) {
    var sql = "SELECT * FROM Blogs;"
    connection.query(sql, function(err, sqlResult){
      if (err) {
          console.log("Oops somethings wrong");
          throw err;
      }
      res.json(sqlResult);
    });
  });


};