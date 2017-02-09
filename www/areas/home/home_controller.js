/**
 * Created by EvaLi on 2016/11/26.
 */
var homeCtrl = angular.module('home.controller', []);
homeCtrl.controller('HomeCtrl', ["$scope", function ($scope) {

  var mySwiper = new Swiper('.swiper-container', {
    autoplay: 10000,
    loop : true
  })

}]);

