$(document).ready(function() {
 
  $("#product-show").owlCarousel({
 
      navigation : false, 
      pagination: false,
      slideSpeed : 400,
      singleItem: true,
      autoHeight: true,
      autoPlay: true,

  });

  var owl = $("#product-show");

  owl.owlCarousel();

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
  $(".next").hover(
    function(){
      $(".next").addClass('next-hover');
    }, function() {
      $(".next").removeClass('next-hover');
    }
  );
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });
  $(".prev").hover(
    function(){
      $(".prev").addClass('prev-hover');
    }, function() {
      $(".prev").removeClass('prev-hover');
    }
  );
 
});