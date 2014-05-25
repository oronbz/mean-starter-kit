(function(angular){
	angular.module('app.geeks.controllers', []).controller('GeekCtrl', ['$scope', 'Geek', function($scope, Geek){
		$scope.$id += ' - GeekCtrl';
		$scope.geeks = [];
		angular.geeks = $scope.geeks;
		$scope.tagline = 'Hello from GeekCtrl!';

		$scope.initData = function() {
			Geek.get()
				.success(function(data){
					$scope.geeks = data;
					angular.geeks = $scope.geeks;
				});
		};

		$scope.initData();

		$scope.formData = {};

		$scope.create = function(geek) {
			Geek.create(geek);
			$scope.formData = {};
			$scope.initData();
		};

		$scope.delete = function(geek) {
			Geek.delete(geek._id);
			$scope.initData();
		};
	}]);
})(angular);