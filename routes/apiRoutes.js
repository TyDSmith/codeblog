var axios = require("axios");
// import $ from 'jquery';
var connection = require("../server");

module.exports = function (app) {
  app.get("/api/blog", function (req, res) {
    var sql = "SELECT * FROM Blogs;";
    connection.query(sql, function (err, sqlResult) {
      if (err) {
        console.log("Oops somethings wrong");
        throw err;
      }
      res.json(sqlResult);
    });
  });

  app.post("/api/submit", function (req, res) {
    console.log("post was recived");
    // console.log(req.body);
    connection.query(
      "INSERT INTO Blogs (title, content, header_image, author, publish_date) VALUES (?,?,?,?,?)",
      [
        req.body.title,
        req.body.content,
        req.body.header_image,
        req.body.author,
        new Date()
      ],
      function (err, result, fields) {
        if (err) throw err;
        res.json(result);
        // console.log(result);
      }
    );
  });
};
