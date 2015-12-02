'use strict';

describe('Routes: UI Router Configurations', function () {
    var state,
        stateParams,
        q,
        templateCache,
        location,
        rootScope,
        injector;
  // load the controller's module
  beforeEach(module('redmartApp'));



  beforeEach(inject(function($state, $location, $rootScope, $templateCache){
    state = $state;
    location = $location;
    rootScope = $rootScope;
    templateCache = $templateCache;
  }))

  beforeEach(inject(function (_$state_, _$stateParams_, _$q_, _$templateCache_, _$location_, _$rootScope_, _$injector_) {
    state = _$state_;
    stateParams = _$stateParams_;
    q = _$q_;
    templateCache = _$templateCache_;
    location = _$location_;
    rootScope = _$rootScope_;
    injector = _$injector_;
  }));


  function mockTemplate(templateRoute, tmpl) {
    templateCache.put(templateRoute, tmpl || templateRoute);
  }


    describe('UI router States', function () {
        function goTo(url) {
          location.url(url);
          rootScope.$digest();
        }

        describe('when empty', function () {
          beforeEach(function () {
            mockTemplate('app/contact/contacts.html');
          });

          it('should go to the contacts state', function () {
            goTo('');
            expect(state.current.name).toEqual('contacts');
          });
        });

        describe('/', function () {
          beforeEach(function () {
            mockTemplate('app/contact/contacts.html');
          });

          it('should go to the contacts state', function () {
            goTo('/');
            expect(state.current.name).toEqual('contacts');
          });
        });


        describe('/contacts', function () {
          beforeEach(function () {
            mockTemplate('app/contact/contacts.html');
          });

          it('should go to the contacts state', function () {
            goTo('/');
            expect(state.current.name).toEqual('contacts');
          });
        });

        describe('/main', function () {
          beforeEach(function () {
            mockTemplate('app/main/main.html');
          });

          it('should go to the main state', function () {
            goTo('/main');
            expect(state.current.name).toEqual('main');
          });
        });
    });

});