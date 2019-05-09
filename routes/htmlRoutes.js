var db = require("../models");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

  res.render("index");

  });

  app.get("/single-post", function(req, res) {

    res.render("single-post");
  
    });

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



