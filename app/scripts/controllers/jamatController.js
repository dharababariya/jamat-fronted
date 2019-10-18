'use strict';


angular.module('AIMJF')
	.controller('JamatCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

		$scope.getJamats = function () {
			$http({ url: 'http://localhost:3000/api/get_jamat' }).then(function (successResponse) {
				$scope.jamats = successResponse.data;
				return successResponse;
			}, function (errorResponse) {
				return errorResponse
			});
		};

		$scope.newJamat = {
			city: '',
			jamat_code: '',
			name: '',
			state: ''
		};

		$scope.getCity = function () {
			$http({ url: 'http://localhost:3000/api/get_cities' }).then(function (successResponse) {
				$scope.cities = successResponse.data;
				return successResponse;
			}, function (errorResponse) {
				return errorResponse
			});
		};
		
		$scope.getState = function () {
			$http({ url: 'http://localhost:3000/api/get_states' }).then(function (successResponse) {
				$scope.states = successResponse.data;
				return successResponse;
			}, function (errorResponse) {
				return errorResponse
			});
		};

		$scope.addJamat = function (newJamat) {

			$http({ url: 'http://localhost:3000/api/create_jamat', method: 'POST', data: newJamat }).then(function (successResponse) {
				$scope.getJamats();
				return successResponse;
			}, function (errorResponse) {
				return errorResponse
			});

		};
		$scope.getJamats();
		$scope.getState();
		$scope.getCity();
	}]);