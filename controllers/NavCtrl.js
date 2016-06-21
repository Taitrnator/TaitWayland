TaitWayland.controller("NavCtrl", function($scope, $location) {
  var current = $location.path();
  console.log(current);
});
