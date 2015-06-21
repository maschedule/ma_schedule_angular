describe('factory: GetPeriods', function(){
  var search;
  var httpBackend;
  var periods;

  beforeEach(module('maSchedule'));

  beforeEach(inject(function(GetPeriods) {
    search = GetPeriods;
  }));

  beforeEach(inject(function(PeriodHelpers){
      periods = PeriodHelpers.periods;
    }))

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("http://localhost:3000/periods")
      .respond(
        { periods: periods }
      );
  }));

  it('responds to query', function(){
    expect(search.query).toBeDefined();
  });

  it('returns a list of periods', function(){
    search.query()
      .then(function(response) {
        expect(response.data).toEqual(periods)
      })
  });
});