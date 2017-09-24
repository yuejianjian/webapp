/**
 * Created by gbh on 2017/08/24.
 */

starter.controller("myhouseCtrl1", ["$scope", "$rootScope", "$state", "$stateParams",
	function ($scope, $rootScope, $state, $stateParams) {
	angular.extend($scope, $stateParams);

	
	if($rootScope.token){
		
	}else{
		
	}

}]);
