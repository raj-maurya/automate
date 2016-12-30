'use strict';

angular.module('myApp.home', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', ['$scope','$location', '$firebaseAuth', function($scope, $location,$firebaseAuth) {
//  var ref = new Firebase('https://blogapp-df403.firebaseio.com/');
//var loginObj = $firebaseAuth(ref);
 //console.log(ref);
  $scope.home = function(event) {
  //  console.log("fetching username and pass");
      event.preventDefault();  // To prevent form refresh
     var username = $scope.user.email;
     var password = $scope.user.password;
console.log(username+"   "+ password);

var auth= $firebaseAuth();

      firebase.auth().signInWithEmailAndPassword(username , password).then(function(){
        // alert("User Login Successful");
         $location.path('/welcome');
      }).catch(function(){
          //console.log(error);
          alert("Error in username or password! try again..!");
      });

/*loginObj.$authWithPassword({
           email: username,
           password: password
       })
       .then(function(user) {
           //Success callback
           console.log('Authentication successful');
       }, function(error) {
           //Failure callback
           console.log('Authentication failure');
       }); */

      }


}]);
