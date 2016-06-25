TaitWayland.controller("HomeCtrl", function($scope, $http) {

  $http.get('JSON/HomePage.json').then(function (res) {
    $scope.data = res.data;
  });

});
