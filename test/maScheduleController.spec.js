describe('GetPeriodsController', function(){
  beforeEach(module('maSchedule'));

  var ctrl;
  var httpBackend;
  var periods;

  beforeEach(inject(function($controller){
    ctrl = $controller('GetPeriodsController');
  }));

  describe('when displaying periods', function() {

    beforeEach(inject(function(PeriodHelpers, _$httpBackend_){
      periods = PeriodHelpers;
      httpBackend = _$httpBackend_;
      httpBackend.whenGET("http://localhost:3000/api/periods")
        .respond([{
          periods: periods
        }]);
    }))

    afterEach(function(){
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('displays search results', function() {
      httpBackend.flush();
      expect(ctrl.allPeriods[0].periods).toEqual(periods);
    });

  });
});