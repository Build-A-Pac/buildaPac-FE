(function() {
  'use strict';

  angular.module('app')

  .controller('ComponentHomeCtrl', function ($scope, $rootScope) {

    $scope.build = [];

      $rootScope.$on('Components:Added', function (event, data) {

        $scope.build = $scope.build.concat(data);

    });

  });

}());
