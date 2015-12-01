'use strict';

angular.module('redmartApp')
  .directive('mInput', function () {
  	var contentURL;

  	var getTemplateURL = function(element, attrs){
  		return 'components/material/mInput/mInput-'+attrs.type+'.html';
  	}

    return {
    	require: '^form',
      replace: true,
      transclude: true,
      scope: {
      	name: '@name',
      	type: '@type',
      	label: '@label',
        ngModel: '=ngModel',

      },
      restrict: 'EA',
      templateUrl: getTemplateURL,

    	/*The required '^form' controller will be available as 4th param in this link function*/
      link: function (scope, element, attrs, formCtrl){
      
      	if (attrs.required !== undefined) {
	        // If attribute required exists
	        // ng-required takes a boolean
	        scope.required = true;
	      }
        scope.form = formCtrl;

      }

    };
  });