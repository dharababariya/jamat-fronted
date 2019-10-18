'use strict';


angular.module('AIMJF')
	.controller('ViewmemberCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

		$scope.getMembers = function () {
			$http({ url: 'http://localhost:3000/api/get_member' }).then(function (successResponse) {
				$scope.members = successResponse.data;
				return successResponse;
			}, function (errorResponse) {
				return errorResponse
			});
		};



		$scope.getJamats = function () {
			$http({ url: 'http://localhost:3000/api/get_jamat' }).then(function (successResponse) {
				$scope.jamats = successResponse.data;
				return successResponse;
			}, function (errorResponse) {
				return errorResponse
			});
		};
		// $scope.getViewmembers();
		$scope.getJamats();
		$scope.getMembers();


	}]);

	