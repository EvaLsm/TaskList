/**
 * Created by 51pg on 2016/12/26.
 */
//总路由模块
angular.module('route', [
  "home.route",
  'detail.route',
  'guidePage.route'
])
  .config(function($stateProvider, $urlRouterProvider) {
   var storage = localStorage.getItem('myStorage');
    if(storage=="true" ){
      $urlRouterProvider.otherwise('/home');
    }else {
      $urlRouterProvider.otherwise('/guidePage');
    }

  });
