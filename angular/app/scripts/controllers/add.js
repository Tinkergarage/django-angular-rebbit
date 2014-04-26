(function(angular) {
	'use strict';

	var webApp = angular.module('angularApp');

	webApp.controller('AddCtrl', function ($scope, $location, ApiLink) {
		$scope.link = {
			title: '',
			url: '',
			upvotes: 0,
			downvotes: 0,
			nsfw: false
		};

		$scope.save = function(link) {
			var request = new ApiLink(link);
			request.$save(function() {
				// If success
				$location.path('/');
			});
		};
	});

})(angular);
