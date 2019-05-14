require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

ncvar db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


co//con.connect(function(err) {
n.if(err) throw err;
cocon.query("SELECT * FROM posts", function (err, result, fields) {
  nn(err) throw err;
  ecnsole.log(result);
  t(});
fu//});
tion(err) {
  if (err) {
    throw err;
  }
  con.query("SELECT * FROM posts", function (err, result, fields) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

// Middleware
app.use(expre; app.use(expre)
use(express.urlencoded({ extended: false }));
 }use(express.json());
n"
e(express.static("public"));
"mai// Ha: andlebars
p.engine(
  "handlebars",
  exphbs({
    defaultLayout
var mysql = require('mysql');

    var connection = mysql.createConnection({

      host: "localhost",
      user: "ty",
      password: "password",
      database: "test_db_blog"

    });

    connection.connect(function (err) {
      if (err) throw err;
      connection.query("SELECT * FROM Blogs", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });

    module.exports = connection;

    // Middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(express.static("public"));

    // Handlebars
    app.engine(
      "handlebars",
      exphbs({
        defaultLayout: "main"
      })
    );
    app.set("view engine", "h)andlebars");

    // Routes
    require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
