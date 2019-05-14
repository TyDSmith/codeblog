// Load index page
app.get("/", function (req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  res.render("index");
});

app.get("/single-post", function (req, res) {
  res.render("single-post");
});

app.get("/submit", function (req, res) {
  res.render("submit-post");
});
// Load example page and pass in an example by id
// app.get("/example/:id", function(req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });

// Render 404 page for any unmatched routes
app.get("*", function (req, res) {
  res.render("404");
});

//create unique URL for e//create unique URL for ecreate unique URL for each blog post (by ID)

app.get("/post/:postID", function (req, res) {
  console.log("choice id is " + req.params.id);
})};

var testVar = 55;

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    //   db.Example.findAll({}).then(function(dbExamples) {
    //     res.render("index", {
    //       msg: "Welcome!",
    //       examples: dbExamples
    //     });
    //   });
    res.render("index");
  });

  app.get("/single-post", function (req, res) {
    res.render("single-post");
  });

  app.get("/submit", function (req, res) {
    res.render("submit-post");
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  //create unique URL for each blog post (by ID)

  app.get("/post/:postID", function (req, res) {
    console.log("choice id is " + req.params.id);
  });
};
if (err) throw err;
console.log(result);
  //send to render
});

});  //res.render("single-post");

