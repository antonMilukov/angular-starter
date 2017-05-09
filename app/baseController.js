app.controller('baseController', function ($rootScope, currentAuth, oAuth) {
	oAuth.checkAuth(currentAuth);
});