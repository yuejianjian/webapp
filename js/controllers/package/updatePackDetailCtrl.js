/**
 * Created by gbh on 2017/08/22.
 */

starter.controller("updatePackDetailCtrl", ["$scope", "httpSvc", "$stateParams"
	,function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);

    httpSvc.post("/homeup/homeup/details", {
        homeupId: $stateParams.homeupId
    }).then(function(data) {
        $scope.detail=data.response;
    });

    //显示电话
	$scope.showTel=function(){
		$scope.isShowTel=!$scope.isShowTel;
	}


}]);
