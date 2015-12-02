'use strict';

angular.module('redmartApp')
  .controller('AddEditContactsCtrl', function($scope, $uibModalInstance, title, contact){
  	$scope.title = title;
  	$scope.contact = contact;

  	$scope.save = function (form) {
  		form.$submitted = true;
  		if(form.$valid) {
	    	$uibModalInstance.close($scope.contact);
	    }
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
});