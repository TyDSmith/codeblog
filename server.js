require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
require('dotenv').config();
var mysql = require('mysql');

//var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;




var connection = mysql.createConnection({

    host: "v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/",
    user: "d8sfxcrhux4qrfh8",
    password: "na0qh0mw3v80fvu7",
    port: 3306,
    database: "pq207a6dbgeya65s"

});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connection done");
//     connection.query("SELECT * ", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// connection.connect(function(err) {
//     if (err) throw err;
//     connection.query("SELECT * FROM Blogs", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

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
