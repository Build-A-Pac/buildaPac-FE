(function() {
  'use strict';

  angular.module('app')

  .controller('ComponentHomeCtrl', function ($scope, $rootScope, $http, HEROKU) {

    $scope.build = [];

      $rootScope.$on('Components:Added', function (event, data) {

        $scope.build = $scope.build.concat(data);

    });

    $scope.addBuild = function (build, buildName) {

      console.log(buildName, build);

          $http.post(HEROKU.URL + 'computer/create', build, buildName, HEROKU.CONFIG)
          .success( function (){


          $location.path('/mybuilds');

          });

    };

  });
}());













