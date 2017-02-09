/**
 * Created by EvaLi on 2016/11/26.
 */
angular.module('guidePage.controller', [])
  .controller('GuidePageCtrl', function ($scope, $window) {
    // 在第一次进入引导页面的时候，设置本地存储myStorage=true
    //在总路由判断myStorage==true则跳转到首页，其他情况跳到引导页
    $scope.$on("$ionicView.beforeEnter", function (e) {
      localStorage.setItem('myStorage', true);
    });
    //引导页轮播插件
    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      //Swiper2.x的初始化是onFirstInit
      onInit: function (swiper) {
        //隐藏动画元素
        swiperAnimateCache(swiper);
        //初始化完成开始动画
        swiperAnimate(swiper);
      },
      onSlideChangeEnd: function (swiper) {
        //每个slide切换结束时也运行当前slide动画
        swiperAnimate(swiper);
      }
    })

  });
