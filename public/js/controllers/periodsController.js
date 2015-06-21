maSchedule.controller('GetPeriodsController', ['GetPeriods', function(GetPeriods){
  var self = this;

  GetPeriods.query()
    .then(function(response){
      self.allPeriods = response.data;
    })

}]);