const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  this.baseURL = 'http://developer.nps.gov/api/v1';

}]);
