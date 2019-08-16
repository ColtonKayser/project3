const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  //vars for API call
  this.baseURL = 'http://developer.nps.gov/api/v1/';
  this.parks = 'parks?';
  this.stateCode = 'stateCode=';
  this.state = '';
  this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  this.searchURL = this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey;
  //for toggling:
  this.showMe = false;

  // === GET PARKS === //
  this.getParks = () => {
    console.log('before');
    $http({
      method: 'GET',
      url: this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey
    }).then(response => {
        console.log('after');
        this.parksData = response.data.data;
    })
  }// end get parks func

  // === TOGGLE === //
  this.togglePark = () => {
    this.showMe = !this.showMe;
  }

}]);
