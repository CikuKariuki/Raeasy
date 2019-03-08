$(document).ready(function() {

    $("button.searchButton").hover(function(){
        $(".searchTerm").fadeIn(3000);
      });
});
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
});
  // Enable Carousel Indicators

$(document).ready(function(){

  $("#myCarousel").carousel();


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


  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });

});
$(document).ready(function() {

  $("button#login").click(function() {
    var userName=$("input#uname").val();
    var passWord=$("input#psw").val();
    // $("#1show").text(player1);
    // $("#2show").text(player2);
    $(".p1").hide();
    $(".p2").show();
// })
//   $("p#sign").click(function() {
//     (".signuppage").show();
});

});
