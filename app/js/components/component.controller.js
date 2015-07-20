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


      console.log(data);


      // $scope.build = ['price', 'name'];

    });


    $scope.build = [];
    $scope.selected = [];


    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
    };


    // $scope.exists = function (item, list) {
    //   return list.indexOf(item) > -1;
    // };

    $scope.addMe = function (x) {
      console.log('clicked');

      console.log($scope.selected);

      $scope.build = $scope.build.concat($scope.selected);

      console.log($scope.build);

    // $scope.toggle = function (item, list) {
    //   var idx = list.indexOf(item);
    //   if (idx > -1) list.splice(idx, 1);
    //   else list.push(item);
    //   $scope.build.push($scope.selected);
    // };


    // Look through your components list and grab any who are checked out and store them in an array
    // Then push that array through to your list of items


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


