'use strict';

angular.module('redmartApp')
  .controller('ContactsCtrl', function ($scope, $http) {
    $scope.contacts = {};


    $scope.httpPromise = $http.get('/api/contacts').success(function(contacts) {
      $scope.contacts = contacts;
    });
  });
