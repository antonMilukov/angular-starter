'use strict';

angular.module('pagesUsersList', ['ngRoute'])

.controller('usersListCtrl', function(Auth, $scope, $firebaseArray) {
  var ref = firebase.database().ref();
  $scope.users = $firebaseArray(ref.child('users'));
});