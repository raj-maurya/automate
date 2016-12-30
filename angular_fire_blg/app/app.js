'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'firebase',
  'myApp.home',
  'myApp.register',
  'myApp.welcome'
]).
config(['$routeProvider', function($routeProvider) {
     // Routes will be here

     $routeProvider.otherwise({
       redirectTo: '/home'
     });
}]);
