'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var postServices = angular.module('postApp.services', ['ngResource']);

postServices.factory('PostServices', ['$resource', function($resource) {
  return $resource(
      'api/:path/:blogId', {path: 'post'},
      {
        insertPost: {
            method: 'POST'
        },
        findAllPosts: {
            method: 'GET', params: {path: 'posts'}
        },
        findPost: {
            method: 'GET'
        },
        deletePost: {
            method: 'DELETE'
        },
        editPost: {
            method: 'PUT'
        }
      });
}]);
