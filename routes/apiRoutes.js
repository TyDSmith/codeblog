var axios = require("axios");

var connection = require("../server");
module.exports = function (app) {
  console.log("apiroutes");
  // Get all examples
  app.get("/api/blogs", function (req, res) {
    axios.get(url);
    var sql = "SELECT * FROM Blogs;";
    connection.query(sql, function (err, sqlResult) {
      if (err) {
        console.log("Oops somethings wrong");
        throw err;
      }
      res.json(sqlResult);
    });
  });

  app.get("/api/", function (req, res) {
    res.json();
    console.log("I am here");
    res.json(connection.connect);
    //the response.json is either connection.connect or connection.connection I don't which it is yet
  });

  app.get("/api/post/:id", function (req, res) {
    console.log("api side");
    console.log("id: ", req.params.id);
    connection.query("SELECT * FROM Blogs where id =" + req.params.id, function (
      err,
      result
      //fields
    ) {
      if (err) {
        throw err;
      }
      res.json(result);
      console.log(result);
    });

    return "Hello";

    // db find the row with the post_id = id
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
