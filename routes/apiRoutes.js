var db = require("../models");

module.exports = function(app) {
  app.get("/api/blog", function(req, res) {
    console.log("howdy");

    // var sql = "SELECT * FROM Blogs";
    // connection.query(sql, function(err){
    //   if (err) {
    //     console.log("oops");
    //     throw err;
    //   }
    //   res.json(sql);
    // });
    db.select(function(data){
      var bloggers_db = { Blogs: data};
      res.json(bloggers_db);
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
