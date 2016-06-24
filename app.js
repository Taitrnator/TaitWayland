var TaitWayland = angular.module('TaitWayland', [
'ngRoute'
]);

TaitWayland.config(['$routeProvider', '$controllerProvider', function ($routeProvider) {
$routeProvider
.when('/', {
  templateUrl: 'Partials/home.html',
  controller: 'HomeCtrl',
  controllerAs: 'HomeCtrl'
})
// Pages
.when('/NCTrans', {
  templateUrl: 'Partials/NCTrans.html',
  controller: 'NCTransCtrl',
  controllerAs: 'NCTransCtrl'
})
.when('/ShareAndTear', {
  templateUrl: "Partials/ShareAndTear.html",
  controller: 'ShareAndTearCtrl',
  controllerAs: 'ShareAndTearCtrl'
})
// else home
.otherwise({ redirectTo: '/'});

}]);
