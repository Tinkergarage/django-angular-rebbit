(function(angular) {
	'use strict';

	var webApp = angular.module('angularApp');

	webApp.controller('AddPostCtrl', function ($location, ApiLink) {
		this.link = {
			title: '',
			url: '',
			upvotes: 0,
			downvotes: 0,
			nsfw: false
		};

		this.save = function(link) {
			var request = new ApiLink(link);
			request.$save(function() {
				// If success
				$location.path('/');
			});
		};
	});

})(angular);
