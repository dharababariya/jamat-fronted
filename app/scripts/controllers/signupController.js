'use strict';

angular.module('AIMJF')
  .controller('SignupCtrl', ['$scope', '$timeout', '$http', '$state', function ($scope, $timeout, $http, $state) {
    $scope.usersignup = function (signupuser) {
      $http({
        url: "http://localhost:3000/api/v1/signup",
        method: "POST",
        data: signupuser
      }).then(
        function (successResponse) {
          $state.go("dashboard.home");
          return successResponse;
        },
        function (errorResponse) {
          return errorResponse;
        }
      );
    };

    // $scope.getUser = function () {
    //       $http({
    //         url: "http://localhost:3000/api/v1/login"
    //       }).then(
    //         function (successResponse) {
    //           $scope.user = successResponse.data;
    //           return successResponse;
    //         },
    //         function (errorResponse) {
    //           return errorResponse;
    //         }
    //       );
    //     };

    //     $scope.newUser = {
    //       name: '',
    //       zcode: ''
    //   };
    //     $scope.loginuser = function (newUser) {

    //       $http({ url: 'http://localhost:3000/api/v1/login', method: 'POST', data: newUser }).then(function (successResponse) {
    //           $scope.loginuser();
    //           return successResponse;
    //       }, function (errorResponse) {
    //           return errorResponse
    //       });
    //   };

  }]);