TaitWayland.controller("ShareAndTearCtrl", function($scope, $http) {

  $http.get('JSON/ShareAndTear.json').then(function (res) {
    $scope.data = res.data;
  });

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
