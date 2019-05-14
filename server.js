require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
require('dotenv').config()

//var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM posts", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


var mysql = require('mysql');

var connection = mysql.createConnection({

    host: "localhost",
    user: "webuser",
    password: "UCR",
    database: "bloggers_db"

});

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM Blogs", function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
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
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {

  
// });

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
