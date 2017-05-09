app.controller('baseController', function ($rootScope, currentAuth, oAuth) {
	oAuth.checkAuth(currentAuth);
	console.log('init!');
});