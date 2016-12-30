'use strict';

angular.module('myApp.register', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])

// Register controller
.controller('RegisterCtrl', ['$scope','$location','$firebaseAuth', function($scope,$location, $firebaseAuth){
  $scope.signUp = function() {
    if (!$scope.regForm.$invalid) {
        console.log('Valid form submission');
        event.preventDefault();  // To prevent form refresh
       var username = $scope.user.email;
       var password = $scope.user.password;
  console.log(username+"   "+ password);

  var auth= $firebaseAuth();

        firebase.auth().createUserWithEmailAndPassword(username , password).then(function(){
          // alert("User signUp Successful");
           $location.path('/home');
        }).catch(function(error){
            //console.log(error);
          //  alert("Already Registered user!!!");
            $scope.regError = true;
                    $scope.regErrorMessage = error.message;
        });
    }
};

}]);
