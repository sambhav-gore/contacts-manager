'use strict';

describe('Directive: mInput', function () {

  // load the directive's module and view
  beforeEach(module('redmartApp'));
  beforeEach(module('components/material/mInput/mInput.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<m-input></m-input>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mInput directive');
  }));
});