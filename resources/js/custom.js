$(function(){
   $("#toggleVideo").click(function () {
      $(this).text(function(i, text){
          return text === "Goats, begone!" ? "Goats, appear!" : "Goats, begone!";
      })
   });
})