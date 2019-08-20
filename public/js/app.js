const app = angular.module('ParkApp', []);


// === API CONTROLLER === //
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
  this.indexOfEditFormToShow = null;
  this.savedMessage = ''
  this.indexOfSavedMessage = null;
  this.indexOfCreateMessage = null;
  this.yes = 'Yes';
  this.no = 'No';
  this.parkCreatedMessage = '';

  // === PARTIALS === //
  this.includePath = 'partials/searchparks.html';
  this.changeInclude = (path) => {
    this.includePath = 'partials/' + path + '.html';
  }

  // === GET PARKS === //
  this.getParks = function() {
    console.log('before');
    this.message = 'Finding Parks...'
    $http({
      method: 'GET',
      url: this.baseURL + this.parks + this.stateCode + this.state + this.apiKey
    }).then(response => {
        console.log('after');
        this.message = '';
        this.parksData = response.data.data;
        console.log(this.parksData);
        this.state = ''; // clears form once data appears

    })
  }// end get parks func

  // === TOGGLE === // hold on for visited/not visited
  this.toggleInfo = () => {
    this.showInfo = !this.showInfo;
  }
  // }; // end toggle func
  // add park to userParks
  this.addToUserPark = function(park){
    // this adds park bu doesnt remove or allow for update
    this.savedMessage = 'Park Saved'
    this.userParks.unshift(park)
    $http({
      method: 'PUT',
      url: '/parks/addpark/add',
      data: {
        park: park
      }
    })
  }
  //Create User Park
  this.createUserPark = function(){
    this.parkCreatedMessage = 'Park Created';
    $http({
      method: 'POST',
      url: '/parks',
      data: this.createForm
    }).then(response => {
      // console.log(response.data);
      controller.userParks.unshift(response.data);
      // controller.getUserParks();

      this.createForm = {};
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
  this.editUserPark = function(userPark) {
    $http({
      method: 'PUT',
      url: '/parks/' + userPark._id,
      data: {
        name: this.updatedName,
        designation: this.updatedDesignation,
        description: this.updatedDescription,
        url: this.updatedUrl,
        visited: this.updatedVisited,
        notes: this.updatedNotes
      }
    }).then(
      function(response){
        controller.getUserParks();

      },
      function(error){
        console.log('error');
      }
    )
  }

  this.getUserParks();
}]);
