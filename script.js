$(function() {

  console.log("hello");
  
  $(".article").each(function(i) {
    $(this).find("h1").addClass("article"+i);
    var articleName = $(this).find("h1").text();
    i = i+1;
    
    $("#myScrollspy").find("ul").append('<li class="nav-item"><a class="nav-link" href="#section' + i + '">' + articleName + '</a></li>');
  
  });
  
});