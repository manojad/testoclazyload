angular.module("myApp1")
.controller('myCtrl1', ['$scope', function($scope){

console.log("hi from myCtrl1");
$scope.viewName = 'View1';
  
}])