'use strict';

/* Controllers */
var postControllers = angular.module('postApp.controllers', []);

postControllers.controller(
    'IndexCtrl',
    ['$scope', 'PostServices',
    function($scope, PostServices) {
  PostServices.findAllPosts().$promise
    .then(function(result) {
      $scope.posts = result.posts;
    });
}]);

postControllers.controller(
    'AddPostCtrl',
    ['$scope', 'PostServices', '$location',
    function($scope, PostServices, $location) {
  $scope.addPost = function() {
    PostServices.insertPost({}, $scope.form);
    $location.path('/');
  };
}]);

postControllers.controller(
    'ReadPostCtrl',
    ['$scope', 'PostServices', '$routeParams',
    function($scope, PostServices, $routeParams) {
  PostServices.get({blogId: $routeParams.id, path: 'post'}).$promise
    .then(function(result) {
      $scope.post = result.post;
    });
}]);

postControllers.controller(
    'EditPostCtrl',
    ['$scope', 'PostServices', '$routeParams', '$location',
    function($scope, PostServices, $routeParams, $location) {
  PostServices.findPost({blogId: $routeParams.id}).$promise
    .then(function(result) {
      $scope.post = result.post;
    });
  $scope.editPost = function() {
    PostServices.editPost({blogId: $routeParams.id}, $scope.post);
    $location.url('/readPost/' + $routeParams.id);
  };
}]);

postControllers.controller(
    'DeletePostCtrl',
    ['$scope', 'PostServices', '$routeParams', '$location',
    function($scope, PostServices, $routeParams, $location) {
  PostServices.findPost({blogId: $routeParams.id}).$promise
    .then(function(result) {
      $scope.post = result.post;
    });
  $scope.deletePost = function() {
    PostServices.deletePost({blogId: $routeParams.id});
    $location.url('/');
  };
}]);
