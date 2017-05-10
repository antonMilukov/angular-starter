'use strict';

angular.module('pagesTasks', [
	//
])

.controller('tasksListCtrl', function(Auth, $scope, $firebaseArray) {
	var ref = firebase.database().ref();
	$scope.tasks = $firebaseArray(ref.child('tasks'));
});