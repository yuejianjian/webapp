/**
 * Created by gbh on 2017/07/17.
 */

starter.controller("mallCtrl", ["$scope", "$stateParams", "$sce",function ($scope, $stateParams,$sce) {
	angular.extend($scope, $stateParams); 

	$scope.paySrc = $sce.trustAsResourceUrl('http://shop.izsjia.com/Mobile');
	
	// $scope.scrollHeight=document.getElementsByClassName("view-container")[0].clientHeight-document.getElementsByClassName("tab-nav")[0].clientHeight-document.getElementsByClassName("header")[0].clientHeight;
 // 	$scope.grid_height={height:''+$scope.scrollHeight+'px'};
 	

}]);