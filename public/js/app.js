const app = angular.module('ParkApp', []);

<<<<<<< HEAD
=======
// === PARTIALS CONTROLLER === //
app.controller('PartialsController', ['$http', function($http) {
  console.log('partials controller');
}]);
>>>>>>> 19f2b2609499b351cb6012cf4c052e736f50adeb

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
  this.showInfo = false;
  this.indexOfParkToShow = null;
  this.indexOfEditFormToShow = null;

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

  //toggles api search by state
  this.toggleParkApi = () => {
    this.showApi = !this.showApi;
  }

  //toggles saved parks section
  this.toggleSavedParks = () => {
    this.showSavedPark = !this.showSavedPark;
  }
  
  // }; // end toggle func
  // add park to userParks
  this.addToUserPark = function(park){
    // this adds park bu doesnt remove or allow for update
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
    $http({
      method: 'POST',
      url: '/parks',
      data: this.createForm
    }).then(response => {
      //puts park at the top of the array
      controller.userParks.unshift(response.data);
      //empties object
      this.createForm ={};
      //clears fields after submit
      controller.name = null;
      controller.designation = null;
      controller.description = null;
      controller.url = null;
      controller.visited = false;
      controller.notes = null;
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
  //edit user park
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
        controller.indexOfEditFormToShow = null;
      },
      function(error){
        console.log('error');
      }
    )
  }


  this.getUserParks();
}]);
