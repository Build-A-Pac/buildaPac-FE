(function() {
  'use strict';

  angular.module('app')

  .controller('ComponentCtrl', function ($scope, $http, HEROKU, $stateParams) {


    var url = HEROKU.URL + 'parts/' + $stateParams.component;

    // var sort_url = HEROKU.URL;

    $http.get(url).success( function (data) {


      $scope.items = data.parts;

      console.log('$i', $scope.items);

      $scope.sortable_keys = data.sortable_keys;

      $scope.details = data.parts.details;

      $scope.sortingBy = 'Processor Speed';

      console.log('details', data.parts[0].details);

      console.log(data);

      $scope.checked = [];


    });

$scope.toggleChecked = function (item, index) {
    $scope.checked.push(item);
  };



   // $http.get(sort_url).success( function (data) {

   //    $scope.sortable_keys = data;
   //    console.log('dd', data);
   //  });


    //
    $scope.properties = ['Brand', 'Price', 'Model'];

    // $scope.sortable_keys = [];

    $scope.items = [];

  });

}());


