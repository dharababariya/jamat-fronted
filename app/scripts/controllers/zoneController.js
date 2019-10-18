'use strict';

angular.module('AIMJF')
    .controller('ZoneCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

        $scope.getZones = function () {
            $http({ url: 'http://localhost:3000/api/get_zone' }).then(function (successResponse) {
                $scope.zones = successResponse.data;
                return successResponse;
            }, function (errorResponse) {
                return errorResponse
            });
        };
        $scope.newZone = {
            name: '',
            zcode: ''
        };



        $scope.addZone = function (newZone) {

            $http({ url: 'http://localhost:3000/api/create_zone', method: 'POST', data: newZone }).then(function (successResponse) {
                $scope.getZones();
                return successResponse;
            }, function (errorResponse) {
                return errorResponse
            });
        };
        $scope.getZones();
        // $scope.getCode();
        $scope.deleteZone={
            id:''
        };
        $scope.deleteZone = function (id) {
            $http({ url: `http://localhost:3000/api/delete_zone${id}`, method: 'DELETE', data: id }).then(function (successResponse) {
                // $scope.zones = successResponse.data;
                $scope.getZones();
                return successResponse;
            }, function (errorResponse) {
                return errorResponse
            });
        };
        $scope.getZones();
    }]);