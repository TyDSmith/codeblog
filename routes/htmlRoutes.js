var db = require("../models");
var axios = require("axios");
var mysql = require('mysql');
var connection = require('../server');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
  res.render("index");
  });

  app.get("/single-post", function(req, res) {
    res.render("single-post");
    });

  app.get("/post/:id", function(req, res) {
    // ajax call api/post/id{ render}
    console.log("req.params.id html", req.params.id)
    ////axios.get("/api/post/").then(function(response) {
      //console.log(response);
      // with thr responsoe you will render the page

      //call the db and render the info
      connection.query("SELECT * FROM Blogs where post_id=" + req.params.id, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.render("single-post");

        insertPostInfo();
        //send to render
      });
      
    });


      //res.render("single-post");
      

  app.get("/submit", function(req, res) {
    res.render("submit-post");
    });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });




  //create unique URL for each blog post (by ID)

  // app.get('/post/:postID', function (req, res) {

  //   console.log("choice id is " + req.params.id);


  // });
};



function insertPostInfo(){
  console.log("woop");
  $('.single-post-content').html("testttttt");
  $('.single-post-content').append("test2");
};