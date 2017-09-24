/**
 * Created by gbh on 2017/07/17.
 */

starter.controller("searchCtrl", ["$scope", "$stateParams", "localStorageService",
	function ($scope, $stateParams, localStorageService) {
	angular.extend($scope, $stateParams);

	$scope.viewHeight=document.getElementsByClassName("view-container")[0].clientHeight-document.getElementsByClassName("header-shadow")[0].clientHeight;
    $scope.grid_height={minHeight:''+$scope.viewHeight+'px'};  

    $scope.searchResult=0;

    $scope.search_arr=localStorageService.get("search_key")||[];

    $scope.search=function(){
    	var arr=$scope.search_arr;
    	if($scope.key && arr.indexOf($scope.key)==-1){
    		arr.unshift($scope.key);
    		if(arr.length>10){
    			arr.slice(0,10);
    		}
    		localStorageService.update("search_key",arr);
    	}
    	
    	
    	$scope.searchResult=1;
    }

    $scope.copy=function(value){
    	$scope.key=value;
    }

    $scope.clearHistory=function(){
    	localStorageService.clear("search_key");
    	$scope.search_arr=[];
    }
    
}]);
