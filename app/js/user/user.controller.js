;(function () {

  'use strict';

  angular.module('app')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location',

    function ($scope, UserFactory, $location) {
      $scope.registerUser = function (userObj) {
        UserFactory.register(userObj);
      };
      $scope.loginUser = function (userObj) {
        UserFactory.login(userObj);
      };


    }

    ])

.directive('logOut', function (UserFactory) {
  return {
    link: function ($scope, element, attrs) {
      element.bind('click', function (){
        UserFactory.logOut();
      });
    }
  };

});


}());
