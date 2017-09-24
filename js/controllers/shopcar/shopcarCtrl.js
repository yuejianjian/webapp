
/**
 * Created by gbh on 2017/07/26.
 */

starter.controller("shopcarCtrl", ["$scope", "$stateParams", "$timeout"
	,function ($scope, $stateParams, $timeout) {
	angular.extend($scope, $stateParams);

 	var listLength=$(".item-checkbox")[0].offsetWidth;
	$scope.onSwipeLeft=function($event){
		console.log($event.target.parentNode);
		var obj=$event.target.parentNode;
		$(obj).animate({left:'-70px'});
	}
	$scope.onSwipeRight=function(){
		document.getElementsByClassName("left")[0].style.left="0";
	}

}]);
