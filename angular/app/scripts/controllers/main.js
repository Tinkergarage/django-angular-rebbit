(function(angular) {
	'use strict';

	var webApp = angular.module('angularApp');

	webApp.controller('PostListCtrl', function (ApiLink) {
    this.links = ApiLink.query();

    this.downvote = function(link) {
      link.downvotes += 1;

      var resource = new ApiLink(link);
      resource.$update();
    };

    this.upvote = function(link) {
      link.upvotes += 1;

      var resource = new ApiLink(link);
      resource.$update();
    };
	});

})(angular);
