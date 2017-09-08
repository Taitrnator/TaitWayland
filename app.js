var TaitWayland = angular.module('TaitWayland', [
'ngRoute',
'ngAnimate',
'duScroll'
]);

TaitWayland.config(['$routeProvider', '$controllerProvider', function ($routeProvider) {
$routeProvider
.when('/', {
  templateUrl: 'Partials/home.html',
  controller: 'HomeCtrl',
  controllerAs: 'HomeCtrl'
})
// Pages
.when('/Portfolio/:ID', {
  templateUrl: 'Partials/Portfolio.html',
  controller: 'PortfolioCtrl',
  controllerAs: 'PortfolioCtrl'
})
.when('/ShareAndTear', {
  templateUrl: "Partials/ShareAndTear.html",
  controller: 'ShareAndTearCtrl',
  controllerAs: 'ShareAndTearCtrl'
})
// else home
.otherwise({ redirectTo: '/'});

}]);
