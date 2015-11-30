'use strict';

angular.module('redmartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/contact/contacts.html',
        controller: 'ContactsCtrl'
      });
  });