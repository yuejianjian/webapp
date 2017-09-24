/**
 * Created by gbh on 2017/08/30.
 */

starter.controller("myContractCtrl", ["$scope","checkSvc", "$rootScope", "$stateParams", 
	function ($scope,checkSvc, $rootScope, $stateParams) {
	angular.extend($scope, $stateParams);

	checkSvc.checkLogin();

}]);

