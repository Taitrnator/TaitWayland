TaitWayland.controller("NCTransCtrl", function($scope, $http) {

  $http.get('JSON/NCTrans.json').then(function (res) {
    $scope.NCTrans = res.data;
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
