/**
 * Created by gbh on 2017/08/21.
 */

starter.controller("showroomsCtrl", ["$scope", "httpSvc", "$stateParams", "$ionicSlideBoxDelegate"
	,function ($scope, httpSvc, $stateParams, $ionicSlideBoxDelegate) {
	angular.extend($scope, $stateParams);

    httpSvc.post("/spread/spread/details", { //体验店轮播图
        spreadId: 5
    }).then(function(data) {

        $scope.adImg=data.response;
        $ionicSlideBoxDelegate.update();
    });
        /*httpSvc.jsonp("http://api.izsjia.com/spread/spread/details?jsonp=JSON_CALLBACK&spreadId:5")
            .success(function(data){
                $scope.adImg=data.response;
                $ionicSlideBoxDelegate.update();
            });*/
        /*httpSvc.jsonp("http://api.izsjia.com/spread/spread/details?jsonp=badgeabc&preadId=5");
        function badgeabc(data){
            $scope.adImg=data.response;
            $ionicSlideBoxDelegate.update();
        }*/

	$scope.roomList={};

    $scope.styleId=0;

    $scope.changeStyleId=function(index){
        $scope.styleId=index;
        $scope.isShow=false;
        httpSvc.post("/experience/experience/list", { //体验店列表
            style: index
        }).then(function(data) {
            $scope.roomList=data.response;
            console.log(data);
        });
    }

    httpSvc.post("/api/attribute/index", {  // 体验店风格
        identifier:3
    }).then(function(data) {
        console.log(1111);
        $scope.styleList=data.response[0].list;
        $scope.styleList1=$scope.styleList.slice(0,4);

    });

	httpSvc.post("/experience/experience/list", {  //体验店列表
        page: 1,
    }).then(function(data) {
        $scope.roomList=data.response;
    });

    $scope.more=function(){
    	$scope.isShow=true;
    }
    $scope.close=function(){
    	$scope.isShow=false;
    }

}]);
