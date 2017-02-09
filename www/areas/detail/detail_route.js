/**
 * Created by EvaLi on 2016/11/26.
 */
//分类页面路由模块
angular.module('detail.route', ['detail.controller', 'detail.services'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/detail',
        templateUrl: 'areas/detail/detail.html',
        controller: 'DetailCtrl'
      })
  });
