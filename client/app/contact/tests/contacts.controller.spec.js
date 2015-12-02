
describe('Controller: ContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('redmartApp'));

  var ContactsCtrl,
      scope,
      $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/contacts')
        .respond([{
            name : 'Terrence S. Hatfield',
            tel: '651-603-1723',
            email: 'TerrenceSHatfield@rhyta.com'
          },
          {
            name : 'Chris M. Manning',
            tel: '513-307-5859',
            email: 'ChrisMManning@dayrep.com'
          },
          {
            name : 'Ricky M. Digiacomo',
            tel: '918-774-0199',
            email: 'RickyMDigiacomo@teleworm.us'
          }]);

          scope = $rootScope.$new();
          
          modalInstance = {                    // Create a mock object using spies
            open: jasmine.createSpy('modalInstance.open').andReturn(
                {
                  result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                  }
                }
              )
          };


          confirmInstance = jasmine.createSpy('confirmInstance').andReturn(
                {
                    then: jasmine.createSpy('confirmInstance.then')
                }
              )

          ContactsCtrl = $controller('ContactsCtrl', {
            $scope: scope,
            $uibModal: modalInstance,
            $confirm: confirmInstance
          });


    }));

    it('should attach a list of contacts to the scope', function () {
      $httpBackend.flush();
      expect(scope.contacts.length).toBe(3);
    });

    it('should open the modal for creating new contact', function() {
      scope.displayAddEditContact('add contact', {});
      expect(modalInstance.open).toHaveBeenCalled();
    })

    describe('Confirmation before deleting', function(){
      it('should display confirmation before deleting a contact', function() {
        scope.removeContact({});
        expect(confirmInstance).toHaveBeenCalled();
      })
    })
}); 