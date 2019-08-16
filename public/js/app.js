const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  this.baseURL = 'http://developer.nps.gov/api/v1/';
  this.parks = 'parks?';
  this.stateCode = 'stateCode=';
  this.state = '';
  this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  this.searchURL = this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey;
  // this.baseURL = 'http://developer.nps.gov/api/v1/';
  // this.parks = 'parks?';
  // this.limit = 'limit=150&';
  // this.state = 'stateCode=';
  // this.stateCode = '';
  // this.parksCode = 'parkCode=';//we may not need this! not including
  // this.query = ''; // not including for now
  // this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  // this.searchURL = this.baseURL + this.parks + this.state + this.stateCode + this.limit + this.apiKey;
  // console.log(this.stateCode)
  // console.log(this.searchURL);

  this.getParks = () => {
    console.log('before');
    $http({
      method: 'GET',
      url: this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey
    }).then(response => {
        this.parks = response.data.data;
    })
  }


}]);
