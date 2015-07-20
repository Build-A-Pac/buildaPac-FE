;(function () {

  'use strict';

  angular.module('app', ['ui.router', 'ngCookies', 'ngMaterial'])
    .constant('HEROKU', {
      URL: 'http://fringuante-madame-1096.herokuapp.com/',
      CONFIG: {
        headers: {
          // 'access_token': $cookies.put('Access-Token')
        }
      }
    })



.config(['$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/home.tpl.html',
      controller: 'ComponentCtrl'
    })


// **************
// login/register
// **************

    .state('login', {
      url: '/login',
      templateUrl: 'js/user/login.tpl.html'
   })
    .state('register', {
      url: '/register',
      templateUrl: 'js/user/register.tpl.html'
    })

    // ************
    // nested views
    // ************


    .state('home.component', {
      url: ':component',
      templateUrl: 'js/views/component.tpl.html',
      controller: 'ComponentCtrl'
    });





    // .state('home.cpu', {
    //   url:'cpu',
    //   templateUrl: 'js/views/cpu.tpl.html'
    // })
    // .state('home.cpuCool', {
    //   url: 'cpucoolers',
    //   templateUrl: 'js/views/cpuCool.tpl.html'
    // })
    // .state('home.motherBoard', {
    //   url: 'motherboards',
    //   templateUrl: 'js/views/motherboard.tpl.html'
    // })
    // .state('home.memory', {
    //   url: 'memory',
    //   templateUrl: 'js/views/memory.tpl.html'
    // })
    // .state('home.storage', {
    //   url: 'storage',
    //   templateUrl: 'js/views/storage.tpl.html'
    // })
    // .state('home.videoCard', {
    //   url: 'videocards',
    //   templateUrl: 'js/views/videoCard.tpl.html'
    // })
    // .state('home.case', {
    //   url: 'cases',
    //   templateUrl: 'js/views/case.tpl.html'
    // })
    // .state('home.powerSupply', {
    //   url: 'powersupplies',
    //   templateUrl: 'js/views/powerSupply.tpl.html'
    // })
    // .state('home.opSystem', {
    //   url: 'opsystems',
    //   templateUrl: 'js/views/opSystem.tpl.html'
    // })
    //  .state('home.monitor', {
    //   url: 'monitors',
    //   templateUrl: 'js/views/monitor.tpl.html'
    // })
    // .state('home.accessories', {
    //   url: 'accessories',
    //   templateUrl: 'js/views/accessories.tpl.html'
    // })

// // .run(['$rootScope', 'UserFactory', LINK,
// //   function ($rootScope, UserFactory, LINK) {
// //     $rootScope.$on('$routeChangesStart', function (){
// //       UserFactory.status();
// //     })
// //   }


//   ])


  } //function



  ]);



}());





