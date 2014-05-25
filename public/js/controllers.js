(function(angular) {
	
	angular.module('app.controllers', []).controller('HomeCtrl', ['$scope', function($scope){
		$scope.$id += ' - HomeCtrl';

		$scope.tagline = 'Hello from HomeCtrl!';

	}])
})(angular);