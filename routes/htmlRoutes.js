// var axios = require("axios");
var mysql = require('mysql');
var connection = require('../server');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

module.exports = function (app) {
  app.get("/content/:id", function (req, res) {
    var sql = "SELECT * FROM Blogs where post_id=" + req.params.id + ";";
    connection.query(sql, function (err, sqlResult) {
      if (err) {
        console.log("Oops somethings wrong");
        throw err;
      }
      var hbsObject = sqlResult;
      res.render("minimal-single", hbsObject[0]);
    });
  });

  // Load index page
  app.get("/", function (req, res) {
    var sql = "SELECT * FROM Blogs;";
    connection.query(sql, function (err, sqlResult) {
      if (err) {
        console.log("Oops somethings wrong");
        throw err;
      }
      res.render("index", {
        blogs: sqlResult
      });
    });
  });

  app.get("/single-post", function (req, res) {
    res.render("single-post");
  });

  app.get("/minimal-single-post", function (req, res) {
    res.render("minimal-single");
  });

  app.get("/submit", function (req, res) {
    res.render("submit-post");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};
