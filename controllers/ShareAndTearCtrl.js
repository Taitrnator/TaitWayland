TaitWayland.controller("ShareAndTearCtrl", function($scope) {

  $(document).ready(function() {
    // menu functionality
    $(".hamburger").toggleClass("is-active");
    $(".responsive-menu").addClass("left");
    $(".hamburger").on('click', function() {
      $(this).toggleClass("is-active");
      $(".responsive-menu").removeClass("left");
    });
  });

});
