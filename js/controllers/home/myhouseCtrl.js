/**
 * Created by gbh on 2017/07/18.
 */

starter.controller("myhouseCtrl", ["$scope", "checkSvc", "$rootScope", "$state", "$stateParams","$timeout","httpSvc",
	function ($scope, checkSvc, $rootScope, $state, $stateParams,$timeout,httpSvc) {
	angular.extend($scope, $stateParams);

	checkSvc.checkLogin();

    
	
    var mySwiper = new Swiper ('.swiper-container', {

    })    

    $scope.closeSlide=function(){
        $scope.isShowBigimg=false;
    }

    $scope.showFullImg=function(id){
        $scope.isShowBigimg=true;
        httpSvc.post("/myhome/details/images", {
            detailsId: id
        }).then(function(data) {
            $scope.fullImgList=data.response;
        });
    }    

	$.ajax({
        type: "GET",
        url: "http://api.izsjia.com/myhome/myhome/current",
        beforeSend: function(request) {
            request.setRequestHeader("token", $rootScope.token);
        },
        success: function(result) {
            $scope.userInfo = result.response;
            console.log($scope.userInfo);
            $timeout(function(){
                if($scope.userInfo.flow.length>4){
                    progressWidth = $(".progress li").eq(0).width()*$scope.userInfo.flow.length;
                    $scope.progress={width:''+progressWidth+'px'};
                }
                if($scope.userInfo.team.length>4){
                    progressWidth = $(".project-team li").eq(0).width()*$scope.userInfo.team.length;
                    $scope.team={width:''+progressWidth+'px'};
                }
            },1000)



            $.ajax({
                type: "GET",
                url: "http://api.izsjia.com/myhome/details/index",
                data:{
                     myhomeId : $scope.userInfo.myhome_id,
                },
                beforeSend: function(request) {
                request.setRequestHeader("token", $rootScope.token);
                },
                success: function(data) {
                    $scope.scene=data.response;
                }
            });
            
        }
    });

}]);
