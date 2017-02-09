/**
 * Created by 51pg on 2016/12/26.
 */

//兼容性配置文件,控制不同平台的兼容性
angular.module('config', [])
  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.platform.android.tabs.position('buttom');
    $ionicConfigProvider.platform.ios.tabs.position('buttom');
  });
