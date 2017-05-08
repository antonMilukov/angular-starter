'use strict';

angular.module('pagesUsersList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users/list', {
    templateUrl: 'pages/users/list/index.html',
    controller: 'UsersListCtrl'
  });
}])

.controller('UsersListCtrl', [function() {
  console.log("user list page");
}]);