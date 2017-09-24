/**
 * Created by gbh on 2017/08/17.
 */

starter.controller("myCollectionCtrl", ["$scope","checkSvc", "$rootScope", "$stateParams", 
	function ($scope,checkSvc, $rootScope, $stateParams) {
	angular.extend($scope, $stateParams);

	checkSvc.checkLogin();

	$scope.navIndex=1;
	$scope.changeIndex=function(index){
		$scope.navIndex=index;
	}

	// $rootScope.token="a5894247433e0caf33d05c53e17397b8b0bde633";
		
	$.ajax({
        type: "GET",
        url: "http://api.izsjia.com/user/user/getinfo",
        beforeSend: function(request) {
            request.setRequestHeader("token", $rootScope.token);
        },
        success: function(result) {
            $scope.userInfo = result.response;
            console.log(result)
        }
    });


}]);

