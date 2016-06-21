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
  controller: 'ChildViewCtrl',
  controllerAs: 'ChildViewCtrl'
})
.when('/ShareAndTear', {
  templateUrl: "Partials/ShareAndTear.html",
  controller: 'ChildViewCtrl',
  controllerAs: 'ChildViewCtrl'
})
// else home
.otherwise({ redirectTo: '/'});

}]);
