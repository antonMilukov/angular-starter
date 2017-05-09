app.config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/admin/");
	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state("login", {
			url: "/login",
			controller: "loginCtrl",
			templateUrl: "pages/auth/login.html",
			data: {
				title: 'Авторизация'
			}
		})
		
		.state('admin', {
			url: '/admin',
			abstract: true,
			resolve: {
				"currentAuth": function(Auth) {
					return Auth.$requireSignIn();
				}
			},
			controller: "baseController"
		})
		
		.state("admin.home", {
			url: "/",
			controller: "mainCtrl",
			templateUrl: "pages/home/home.html",
			data: {
				title: 'Главная'
			}
		})
		
		.state("admin.users-list", {
			url: "/users/list",
			controller: "usersListCtrl",
			templateUrl: "pages/users/users-list.html",
			data: {
				title: 'Пользователи'
			}
		})
		
		.state("admin.categories-list", {
			url: "/categories/list",
			controller: "categoriesListCtrl",
			templateUrl: "pages/categories/categories-list.html",
			data: {
				title: 'Категории'
			}
		})
	
});