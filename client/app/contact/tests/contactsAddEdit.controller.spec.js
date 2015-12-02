

describe('Controller: AddEditContact Ctrl', function () {

  beforeEach(module('redmartApp'));

  var Ctrl,
      scope,
      modalInstance;

  // Initialize the controller and a mock scope
  beforeEach(inject(
    function ($controller, $rootScope, $templateCache, $compile) {     
      scope = $rootScope.$new();
      templateCache = $templateCache;
      modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      };

      //create a mock cntact object (which is passed to the modal)
      contactObj = {
        name: 'Name',
        email: 'email@server.com',
        tel: '1234567'
      },
      //create a mock form (angular takes care of validating actual form)
      scope.formObj = {
        $valid: true
      },
      Ctrl = $controller('AddEditContactsCtrl', {
        $scope: scope,
        $uibModalInstance: modalInstance,
        title: 'title',
        contact: contactObj
      });


    })
  );

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(Ctrl).not.toBeUndefined();
    });
  });
  describe('Modal popup', function(){
    it('should close the modal with the contact object when Accepted', function () {
      scope.save(scope.formObj);
      expect(modalInstance.close).toHaveBeenCalledWith(contactObj);
    });

    it('should NOT close the modal when there is an Error in the form', function () {
      scope.formObj.$valid = false;
      scope.save(scope.formObj);
      expect(modalInstance.close).not.toHaveBeenCalledWith(contactObj);
    });

    it('should close the modal with result "cancel" when rejected', function () {
      scope.cancel();
      expect(modalInstance.dismiss).toHaveBeenCalledWith('cancel');
    });
  });

});