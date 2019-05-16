// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
// var axios = require("axios");


// The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

// //Populate HTML Divs from templates  (footer, header, sidebar, etc)
// function onload(){
// $("#header").load("../htmlTemplates/header.html");
// $("#sidebar").load("../htmlTemplates/sidebar.html");  
// $("#footer").load("../htmlTemplates/footer.html"); 
// };

function getPost(){
$.ajax({
  url: "api/blog",
  type: "GET",
  success: function(testPost){
    console.log(testPost);
    console.log(testPost[0].content);
    $("#header").append('<p>hello world, this is nak</p>');
  },
});
// var data = [
//   author,
//   content,
//   header_img,
//   post_id,
//   publish_date,
//   title
// ]
// for (i = 0; i < data.length; i++) {
//   console.log("Is this your data? ", data);
//   // append data here
// };
};
getPost();

function handelPost(){
  // event.preventDefault();
  var title = $('#title-input').val();
  var headerURL = $('#header-image-input').val();
  var content = $('#post-content-input').val();
  var post = {
    title,
    headerURL,
    content
  };
  console.log(post);
  $.post("/api/post", post, function(){
    console.log("post was sent ♥");
  })
};

$('#submitBtn').on("click", function(event){
  event.preventDefault();
  handelPost();
});
// api/blog is returning the post. need a route to return 3 most recent to display on front page.
// setup for loop to go through data objects.
// inside of loop, using handlebars/jquery to append dynmaclly
// fiddle with it.