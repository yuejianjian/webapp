// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic', 'oc.lazyLoad']);

starter.run(function($ionicPlatform, $q, httpSvc,popupSvc, $rootScope, $state,  CONFIG, $ionicHistory) {
    
    $ionicPlatform.ready(function() {

        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
    });
    $rootScope.$on("$stateChangeStart", function() {
    });

    $rootScope.constant = CONFIG;

    $rootScope.img_url=CONFIG.IMG_URL;
    //返回上一页
    $rootScope.goBack = function() {
        history.back();
    }
    /*.config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers
            .common['X-Requested-With'];
    });*/
  
});


