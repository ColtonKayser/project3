const app = angular.module('ParkApp', []);

app.controller('MainController', ['$http', function($http) {
  // === VARIABLES === //
  const controller = this;
  this.createForm = {};
  //vars for API call
  this.baseURL = 'https://developer.nps.gov/api/v1/';
  this.parks = 'parks?';
  this.stateCode = 'stateCode=';
  this.state = '';
  this.apiKey = '&api_key=dIyH9p8twcw6BsTtQoTUfdOgCKnNgCVfsCAsNGhb';
  this.searchURL = this.baseURL + this.parks + this.stateCode + this.state +  this.apiKey;
  //for toggling:
  this.showInfo = true;
  this.indexOfParkToShow = null;

  // === GET PARKS === //
  this.getParks = function() {
    console.log('before');
    $http({
      method: 'GET',
      url: this.baseURL + this.parks + this.stateCode + this.state + this.apiKey
    }).then(response => {
        console.log('after');
        this.parksData = response.data.data;
    })
  }// end get parks func

  // === TOGGLE === // hold on for visited/not visited
  this.toggleInfo = () => {
    this.showInfo = !this.showInfo;
  }
  // }; // end toggle func

  //Create User Park
  this.createUserPark = function(){
    $http({
      method: 'POST',
      url: '/parks',
      data: this.createForm
    }).then(response => {
      console.log(response.data);
      controller.getUserParks();
    }, error => {
      console.log(error);
    })
  }

  //show user parks on page
  this.getUserParks = function(){
    $http({
      method: 'GET',
      url: '/parks/',
    }).then(function(response){
      controller.userParks = response.data;

    }, function(){
      console.log('error');
    })
  }

  //delete user park
  this.deleteUserPark = function(userPark){
    $http({
        method:'DELETE',
        url: '/parks/' + userPark._id
    }).then(
        function(response){
            controller.getUserParks();
        },
        function(error){

        }
    );
}


  //edit user park bug needs fixin'
  // this.editUserPark = function(userPark) {
  //   $http({
  //     method: 'PUT',
  //     url: '/parks/' + userPark._id,
  //     data: {
  //       this.name: this.updatedName,
  //       this.designation: this.updatedDesignation,
  //       this.description: this.updatedDescription,
  //       this.url: this.updatedUrl,
  //       this.visited: this.updatedVisited,
  //       this.notes: this.updatedNotes
  //     }
  //   }).then(
  //     function(response){
  //       controller.getUserParks();
  //     },
  //     function(error){
  //       console.log('error');
  //     }
  //   )
  // }


  this.getUserParks();
}]);
