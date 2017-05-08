'use strict';

angular.module('pagesMain', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'pages/main/index.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', [function() {
  console.log("Its a main page!");
}]);