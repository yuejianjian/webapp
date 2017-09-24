/**
 * Created by gbh on 2017/08/22.
 */

starter.controller("showroomDetailCtrl", ["$scope", "httpSvc", "$stateParams", "popupSvc"
	,function ($scope, httpSvc, $stateParams,popupSvc) {
	angular.extend($scope, $stateParams);

	$scope.roomList={};

    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    })

    /* httpSvc.post("/experience/experience/images", {
         experienceId:$stateParams.experienceId
     }).then(function(data) {
         $scope.imgList=data.response;

    });*/

    httpSvc.post("/experience/experience/details", {
        experienceId:$stateParams.experienceId
    }).then(function(data) {
        $scope.info=data.response;

    });

    $scope.collect=function(){
        if($scope.isCollect){
            popupSvc.loading("取消收藏", 1000);
            $scope.isCollect=false;
        }else{
            popupSvc.loading("收藏成功", 1000);
            $scope.isCollect=true;
        }
    }


}]);
