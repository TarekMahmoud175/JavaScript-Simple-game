$(document).ready(function(){
  var Name= prompt("what is your name");
  $("#mytxt").html('hello '+ Name + " Ready to play !!");
  if ($("#mytxt").text() != "") {
    $("#txt").animate({
      opacity:0 ,
    },3000 , function(){
      $("#txt").hide(2000);
    });
  }
});
