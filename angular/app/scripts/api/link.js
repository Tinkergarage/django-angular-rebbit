(function(angular) {
  'use strict';

  var webApp = angular.module('angularApp');

  webApp.factory('ApiLink', function($resource) {
    var _endpoint = 'http://localhost:8000/api/links/:id';

    return $resource(
      _endpoint,
      { id: '@id' },
      { update: { method: 'PUT' } }
    );
  });

})(angular);
