(function(angular) {
	angular.module('app', [
		// angular modules
		'ngRoute',

		// app modules
		'app.controllers',
		'app.geeks.controllers',
		'app.geeks.services',

		// 3rd party
		'ui.bootstrap'
	])

	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);
			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html',
					controller: 'HomeCtrl'
				})

				.when('/geeks', {
					templateUrl: 'views/geek.html',
					controller: 'GeekCtrl'
				});

			

		}
	]);
})(angular);