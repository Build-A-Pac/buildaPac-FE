;(function () {
  'use strict';

  angular.module('app', [])

  .factory('UserFactory', ['$http', 'LINK', '$cookies', '$location',

    function ($http, LINK, $cookies, $location) {
      var currentUser = function (data) {
        $cookies.put('Access-Token', data.Acces-Token);
          $cookies.put(userObjectId, data.objectId);
      };

      var loginStatus = function () {
        var user = currentUser();
        if (data) {
          LINK.CONFIG.headers[] = data.Access-Token;
        }
      };

      var addUser = function (userObj) {
        $http.post(LINK.URL + 'users', userObj, LINK.CONFIG)
        .then( function (res) {
          console.log(res);
        })
      };
      var loginUser = function (userObj) {
        $http({
          method: 'GET',
          url: LINK.URL + 'login',
          headers: LINK.CONFIG.headers,
          params: userObj
        }).success (function (res) {
          console.log(res);
          currentUser(res);
        });
      };

      var logoutUser = function () {
        $cookies.remove('sessionToken');
        $cookies.remove(userObjectId);
        $location.path('/login');
      }

      return {
        register : addUser,
        login : loginUser,
        user : currentUser,
        status : loginStatus,
        logout : logoutUser
      };


    }

    ])



}());
