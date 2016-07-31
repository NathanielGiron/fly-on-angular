angular.module('AirplaneServices', ['ngResource'])

.factory('AirplaneAPI', ['$resource', function($resource) {
	return $resource('/api/airplanes/:id', {});
}]);