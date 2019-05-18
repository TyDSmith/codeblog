$(document).ready(function () {
  // Get references to page elements
  // var $exampleText = $("#example-text");
  // var $exampleDescription = $("#example-description");
  // var $submitBtn = $("#submit");
  // var $exampleList = $("#example-list");
  // var axios = require("axios");
  function getPost() {
    $.ajax({
      url: "api/blog",
      type: "GET"
    });
  }

  getPost();

  function handelPost() {
    // event.preventDefault();
    var title = $("#title-input").val();
    var headerURL = $("#header-image-input").val();
    var author = $("#author-input").val();
    var content = document.getElementById("post-content-input_ifr").contentWindow.document.body.innerHTML;
    var post = {
      title: title,
      header_image: headerURL,
      author: author,
      content: content
    };

    if ((content !== null && content !== "" && content !== undefined)) {
      $.post("/api/submit", post, function () {
        console.log("post was sent");
      });
    } else {
      alert("No content!");
    }
  }

//Return to homepage on post submission
  function renderHomepage(){
    window.location.replace("/");
    return false;
  }

  $("#submitBtn").on("click", function (event) {
    event.preventDefault();
    handelPost();
    renderHomepage();
  });

//Create widget that displays most recent posts
  function showSidebarPosts(clipped3RecentPosts){
    for (i=0;i<clipped3RecentPosts.length;i++){
      var openDiv = "<div class='sidebarPostTitles'>";
      var closeDiv = "</div>";
      var postTitle = "<a href=/content/" + clipped3RecentPosts[i].post_id 
        + ">" + clipped3RecentPosts[i].title + "</a></div>";
      $('#sidebar-content').append(
        openDiv + postTitle + closeDiv
      );
    }
  };

//Sort posts and limit to 3
  function sortPostsByRecent(){
    var postsArray = [];
    $.ajax({
      url: "api/blog",
      type: "GET",
      success: function(data){
        var allPosts = data;
      }
    }).then( 

      function sortRecentPosts(allPosts){
        for (i=0; i < allPosts.length; i++){
          postsArray.push(allPosts[i]);
        }
        postsArray.sort( function (a,b){return b.post_id - a.post_id;});
        var clipped3RecentPosts = postsArray.slice(0,3);
        showSidebarPosts(clipped3RecentPosts);
      })};

  sortPostsByRecent();
 
//Populate header, footer, and sidebar from html template
  function popTags() {
    $("#header").load("../htmlTemplates/header.html");
    $("#sidebar").load("../htmlTemplates/sidebar.html");
    $("#footer").load("../htmlTemplates/footer.html");
  }
  popTags();

});

