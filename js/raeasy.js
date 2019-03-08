<<<<<<< HEAD
<<<<<<< HEAD
$("document").ready( function() {
 
    $("button.searchButton").hover(function(){
        $(".searchTerm").fadeIn(3000);
      });
   
=======
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
=======
$(document).ready(function(){

  $("#myCarousel").carousel();

>>>>>>> origin/feature/Rodney
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });

<<<<<<< HEAD
  // Enable Carousel Controls
=======
>>>>>>> origin/feature/Rodney
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
<<<<<<< HEAD
>>>>>>> origin/feature/Rodney
=======
>>>>>>> origin/feature/Rodney
});
