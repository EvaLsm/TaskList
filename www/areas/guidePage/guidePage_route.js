/**
 * Created by EvaLi on 2016/11/26.
 */
//引导页的路由模块
angular.module('guidePage.route', ['guidePage.controller', 'guidePage.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
      });
  });
