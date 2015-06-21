maSchedule.factory('GetPeriods', ['$http', function($http) {

  var queryUrl = 'http://localhost:3000/api/periods'

  return {
    query: function() {
      return $http({
        url: queryUrl,
        method: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
      })
    }
  }  
}]);
