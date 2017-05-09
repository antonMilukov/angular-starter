'use strict';

angular.module('pagesUsersList', ['ngRoute'])

.controller('UsersListCtrl', function(Auth, $scope, $firebaseObject, currentAuth) {
  var ref = firebase.database().ref();
  $scope.users = $firebaseObject(ref.child('users'));
});