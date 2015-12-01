'use strict';

angular.module('redmartApp')
  .controller('ContactsCtrl', function ($scope, $http, $confirm) {
    $scope.contacts = {};

    /*We can use this promise to bind to preloader other components*/
    $scope.httpPromise = {};

    $scope.getContacts = function() {
    	/*Get our contacts from the API*/
	    $scope.httpPromise = $http.get('/api/contacts').success(function(contacts) {
	      $scope.contacts = contacts;
	      /*Add a random image for each contact*/
	      angular.forEach($scope.contacts, function(v,k){
	      	contacts[k].imageSrc = $scope.getRandomImage();
	      })
	    });
    }

    $scope.getContacts();


   	$scope.removeContact = function(contact) {

   		 $confirm({text: 'Are you sure you want to delete?', title: 'Delete Contact', ok: 'Yes', cancel: 'No'})
        .then(function() {
          $http.delete('/api/contacts/' + contact._id).success(function(){
		      	$scope.getContacts();
		      })
        });
    };


    /*utility function to generate a random image path*/
    $scope.getRandomImage = function(){
    	return "assets/images/faces/" + Math.floor((Math.random()*10)+1) + ".jpg";
    }
  });
