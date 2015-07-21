(function() {
  'use strict';

  angular.module('app')

  .controller('ComponentCtrl', function ($scope, $http, HEROKU, $stateParams, $rootScope) {


    var url = HEROKU.URL + 'parts/' + $stateParams.component;

    // var sort_url = HEROKU.URL;
      $http.get(url).success( function (data) {

        $scope.items = data.parts;

        $scope.sortable_keys = data.sortable_keys;

        $scope.details = data.parts.details;

        $scope.sortingBy = 'Processor Speed';

        console.log(data);

        // $scope.build = ['price', 'name'];

      });


    $scope.selected = [];


    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
    };




    $scope.addMe = function (x) {

      $rootScope.$broadcast('Components:Added', $scope.selected);

    };


    //
    $scope.properties = ['Brand', 'Price', 'Model'];

    // $scope.sortable_keys = [];

    $scope.items = [];

  });

}());


