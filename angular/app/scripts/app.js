(function(angular) {
  'use strict';

  var webApp = angular.module('angularApp', ['ngResource', 'ngRoute']);

  webApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.when('/add/', {
      templateUrl: 'views/add.html',
      controller: 'AddCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });

})(angular);
