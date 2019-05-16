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

  app.get("/api/", function(req, res) {
    console.log("I am here");

});
  
  // app.get("", function(req, res) {

  // });

  // route to search by id
  app.get("/api/post/:id", function(req,res){
    console.log("api side")
    console.log("id: ", req.params.id);
    connection.query("SELECT * FROM Blogs where post_id =" + req.params.id, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
      // console.log(result);
    //res.JSON(connection.connection);
    
  })
    return("hi")

      if (err) {
          console.log("Oops somethings wrong");
          throw err;
      }
      res.json(sqlResult);
    });
    // db find the row with the post_id = id

  

  // app.get("/api/post/author/:author", function(req,res){
  //   console.log("api side")
  //   console.log("author: ", req.params.author)

  //    var sql = `SELECT * FROM Blogs WHERE author = ${req.params.author}`
  //    connection.query(sql, function(err, sqlResult){

  //     if (err) {
  //         console.log("Oops somethings wrong");
  //         throw err;
  //     }
  //     res.json(sqlResult);
  //   });
  //   // db find the row with the post_id = id

  // });

  // Create a new example

  // extract info, take the three submit values from req.body
  // use schema.sql to insert values
  app.post("/api/post", function(req, res) {
    console.log("post was recived");
    console.log(req.body);
    res.json(req.body);
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });


  });
  

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

};