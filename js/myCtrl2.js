angular.module("myApp1")
.controller('myCtrl2', ['$scope', function($scope){

console.log("hi from myCtrl2");
$scope.viewName = 'View2';
  
}])