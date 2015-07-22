(function () {

  'use strict';

  angular.module('app')

  .controller('AutoCtrl', function ($scope, $http, HEROKU, $stateParams) {



$scope.autoBuild = function (total_price) {

  var price = Number(total_price);


    $http.post(HEROKU.URL + 'computer/build', {max_price: price},  HEROKU.CONFIG)
      .success( function (data) {
console.log(data);

    $scope.totalPrice = data.total_price;
    $scope.autoBuild = data.parts;

    console.log(data.parts);

    // [{
    //   total_price: data.total_price,
    //   parts: data.parts,
    //   cpu: data.parts[0]

    // }];


    // $scope.cpu = data.parts.cpu;

    });

};



  });









































}());
