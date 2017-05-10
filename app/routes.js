app.config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/admin/");
	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state("login", {
			url: "/login",
			data: {
				title: 'Авторизация'
			},
			views: {
				'body': {
					controller: "loginCtrl",
					templateUrl: "pages/auth/login.html"
				}
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
		.state("admin.categories-edit", {
			url: "/categories/edit/:categoryId",
			controller: "categoriesEditCtrl",
			templateUrl: "pages/categories/categories-edit.html",
			data: {
				title: 'Добавить\\изменить категорию'
			}
		})
		
		.state("admin.tasks-list", {
			url: "/tasks/list",
			controller: "tasksListCtrl",
			templateUrl: "pages/tasks/tasks-list.html",
			data: {
				title: 'Задания'
			}
		})
		
		.state("admin.templates-list", {
			url: "/templates/list",
			controller: "templatesListCtrl",
			templateUrl: "pages/templates/templates-list.html",
			data: {
				title: 'Шаблоны'
			}
		})
	
});