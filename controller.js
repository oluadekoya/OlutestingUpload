
var TestAppController2 = angular.module('TestAppController2', []);

TestAppController2.controller('TestAppController1', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

TestAppController2.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
