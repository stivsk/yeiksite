	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/desktop', {
				templateUrl : 'pages/desktop.html',
				controller  : 'desktopController'
			})

			// route for the contact page
			.when('/web', {
				templateUrl : 'pages/web.html',
				controller  : 'webController'
			})
			.when('/mobile', {
				templateUrl : 'pages/mobile.html',
				controller 	: 'mobileController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.titulo = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('desktopController', function($scope) {
		$scope.titulo = 'Look! I am an about page.';
	});

	scotchApp.controller('webController', function($scope) {
		$scope.titulo = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('mobileController', function($scope) {
		$scope.titulo = 'mobile first';
	});