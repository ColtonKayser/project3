const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  this.baseURL = 'http://developer.nps.gov/api/v1/';
  this.parks = 'parks?';
  this.stateCode = 'stateCode=';
  this.state = '';
  this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  this.searchURL = this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey;


  // === GET PARKS === //
  this.getParks = () => {
    console.log('before');
    $http({
      method: 'GET',
      url: this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey
    }).then(response => {
        console.log('after');
        this.parks = response.data.data;
    })
  }// end get parks func

  // === PARTALS === //
  this.includePath = 'partials/parks.html'
  this.changeInclude = (path) => {
    this.includePath = 'partials/' + path + '.html';
    console.log('clicked!!!!!');
  }

}]);
