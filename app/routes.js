app.config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/main");
	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state("login", {
			url: "/login",
			controller: "loginCtrl",
			templateUrl: "pages/login/index.html"
		})
		
		.state('admin', {
			url: '/admin',
			abstract: true,
			resolve: {
				"currentAuth": ["Auth", function(Auth) {
					return Auth.$waitForSignIn();
				}]
			},
			controller: "baseController"
		})
		
		.state("admin.home", {
			url: "/",
			controller: "MainCtrl",
			templateUrl: "pages/main/index.html"
		})
		
		.state("admin.users-list", {
			url: "/users/list",
			controller: "UsersListCtrl",
			templateUrl: "pages/users/list/index.html"
		})
	
});