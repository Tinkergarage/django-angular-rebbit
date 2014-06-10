(function(angular) {
  'use strict';

  var webApp = angular.module('angularApp', ['ngResource', 'ngRoute']);

  webApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'PostListCtrl',
      controllerAs: 'rebbit'
    });

    $routeProvider.when('/add/', {
      templateUrl: 'views/add.html',
      controller: 'AddPostCtrl',
      controllerAs: 'post'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });

})(angular);
