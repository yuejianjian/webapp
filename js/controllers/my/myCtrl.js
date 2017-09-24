/**
 * Created by gbh on 2017/07/17.
 */

starter.controller("myCtrl", ["$scope", '$rootScope', "httpSvc", "$stateParams","$timeout",
	function ($scope, $rootScope, httpSvc, $stateParams,$timeout) {
	angular.extend($scope, $stateParams);

    // $rootScope.token="a5894247433e0caf33d05c53e17397b8b0bde633";

	if($rootScope.token){
		$scope.isLogin=true;
		$.ajax({
            type: "GET",
            url: "http://api.izsjia.com/user/user/getinfo",
            beforeSend: function(request) {
                request.setRequestHeader("token", $rootScope.token);
            },
            success: function(result) {
                $scope.userInfo = result.response;
                
            }
        });

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
                },1000)
            }
        });   

	}else{
		$scope.isLogin=false;
	}

}]);

