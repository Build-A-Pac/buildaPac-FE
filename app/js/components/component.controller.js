(function() {
  'use strict';

  angular.module('app')

  .controller('ComponentCtrl', function ($scope, $http, HEROKU, $stateParams) {


    var url = HEROKU.URL + 'parts/' + $stateParams.component;

    // var sort_url = HEROKU.URL;

    $http.get(url).success( function (data) {


      $scope.items = data.parts;

      $scope.sortable_keys = data.sortable_keys;

      $scope.details = data.parts.details;

      $scope.sortingBy = 'Processor Speed';

      console.log('details', data.parts[0].details);

      console.log(data);


    });





   // $http.get(sort_url).success( function (data) {

   //    $scope.sortable_keys = data;
   //    console.log('dd', data);
   //  });


    //
    $scope.properties = ['Brand', 'Price', 'Sale'];

    // $scope.sortable_keys = [];

    $scope.items = [];

  });

}());


