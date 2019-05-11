var db = require("../models");
var axios = require("axios");
// import $ from 'jquery';

module.exports = function(app) {
  console.log("apiroutes")
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  app.get("/api/", function(req, res) {
    console.log("I am here")
    //res.JSON(connection.connection);
  });
  
  // app.get("", function(req, res) {

  // });

  app.get("/api/post/:id", function(req,res){
    console.log("api side")
    console.log("id: ", req.params.id)
    return("hi")

    // db find the row with the post_id = id

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
