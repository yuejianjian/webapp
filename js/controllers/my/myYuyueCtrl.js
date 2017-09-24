/**
 * Created by gbh on 2017/08/16.
 */

starter.controller("myYuyueCtrl", ["$scope","checkSvc", "$rootScope", "$stateParams", 
	function ($scope,checkSvc, $rootScope, $stateParams) {
	angular.extend($scope, $stateParams);

	checkSvc.checkLogin();

	$scope.navIndex=1;
	$scope.changeIndex=function(index){
		$scope.navIndex=index;
	}


}]);

