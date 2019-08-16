const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  this.baseURL = 'http://developer.nps.gov/api/v1/';
  this.parks = 'parks?';
  this.parksCode = 'parkCode=';//we may not need this! not including
  this.query = ''; // not including for now
  this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  this.searchURL = this.baseURL + this.parks + this.apiKey;

  // console.log(this.searchURL);

  this.getParks = () => {
    console.log('before');
    $http({
      method: 'GET',
      url: this.searchURL
    }).then(response => {
      console.log('after');
      console.log(response.data.data);
    })
  }//end get parks func

  console.log(this.getParks());
}]);

// https://developer.nps.gov/api/v1/parks?&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb
//
// https://developer.nps.gov/api/v1parks?&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb
