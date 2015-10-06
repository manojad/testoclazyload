var myApp = angular.module("myApp1", ['ui.router','oc.lazyLoad'])
.config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
    .otherwise('/');

  $stateProvider
  .state('index', {
    url:"/",
    template:"<p>you are in index<p>"
  })
  .state('state1', {
    url:"/1",
    templateUrl:"templates/view.html",
    controller: "myCtrl1",
    resolve:{
      load2: function ($ocLazyLoad){
        console.log("resolving 1");
        return $ocLazyLoad.load("js/myCtrl1.js");
      }
    }
  })  
  .state('state2', {
    url:"/2",
    templateUrl:"templates/view.html",
    controller: "myCtrl2",
    resolve:{
      load2: function ($ocLazyLoad){
        console.log("resolving 1");
        return $ocLazyLoad.load("js/myCtrl2.js");
      }
    }
  })
  
});
