(function(angular) {
	'use strict';

	var webApp = angular.module('angularApp');

	webApp.controller('MainCtrl', function ($scope, ApiLink) {
    $scope.links = ApiLink.query();

    $scope.downvote = function(link) {
      link.downvotes += 1;

      var resource = new ApiLink(link);
      resource.$update();
    };

    $scope.upvote = function(link) {
      link.upvotes += 1;

      var resource = new ApiLink(link);
      resource.$update();
    };
	});

})(angular);
