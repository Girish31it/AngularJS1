var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope, $http) {
  var dataPath = 'lib/data.json';

  $http.get(dataPath).success(function(data){
    $scope.employees = data;  
  });
  
  $scope.addRow = function(){		
  	$scope.employees.push({ 'name':$scope.name, 'mail': $scope.mail, 'dept':$scope.dept });
  	$scope.name='';
  	$scope.mail='';
  	$scope.dept='';
  };
  
  
  $scope.removeRow  =function(index){
    $scope.employees.splice(index,1);
  };
  
});
