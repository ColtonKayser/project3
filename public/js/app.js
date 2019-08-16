const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  this.baseURL = 'http://developer.nps.gov/api/v1/';
  this.parks = 'parks?';
  this.limit = 'limit=150&';
  this.state = 'stateCode=';
  this.stateCode = '';
  this.parksCode = 'parkCode=';//we may not need this! not including
  this.query = ''; // not including for now
  this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  this.searchURL = this.baseURL + this.parks + this.state + this.stateCode + this.limit + this.apiKey;
  console.log(this.stateCode)
  // console.log(this.searchURL);

  this.getParks = () => {
    console.log('before');
    $http({
      method: 'GET',
      url: this.searchURL
    }).then(response => {
      console.log('after');
      let parksArray = response.data.data;
      // console.log(response.data)
      console.log(parksArray)
      console.log(this.searchURL)
      
      // for (let i=0; i < parksArray.length; i++) {
      //   if (parksArray[i].states === this.stateCode) {
      //     console.log(parksArray[i])
      //   }
      // }
    })
  }//end get parks func
  // && parksArray[i].designation === 'National Park'
}]);

// https://developer.nps.gov/api/v1/parks?&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb
//
// https://developer.nps.gov/api/v1parks?&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb
