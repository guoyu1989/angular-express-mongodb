'use strict';

// Declare app level module which depends on filters, and services
angular.module(
    'postApp',
    ['ngRoute', 'ngResource', 'postApp.filters',
     'postApp.services', 'postApp.directives', 'postApp.controllers']).
  config(
      ['$routeProvider', '$locationProvider',
       function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl'
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: 'AddPostCtrl'
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: 'ReadPostCtrl'
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: 'EditPostCtrl'
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: 'DeletePostCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);