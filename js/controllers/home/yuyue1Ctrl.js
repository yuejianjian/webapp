
/**
 * Created by gbh on 2017/08/25.
 */

starter.controller("yuyue1Ctrl", ["$scope", "httpSvc", "$stateParams", "$state"
	,function ($scope, httpSvc, $stateParams, $state) {
	angular.extend($scope, $stateParams);

	$scope.yuyue=function(){
		var name=$(".info-input").eq(0).val();
		var mobile=$(".info-input").eq(1).val();
		httpSvc.post("/myhome/appointment/index", {
	        name: name,
	        mobile: mobile,
	    }).then(function(data) {
	        if(data.code==0){
	        	$scope.showTip=true;
	        	$scope.tip=data.msg;
	        }else{
	        	$state.go("yuyue2",{
	        		name: name,
	        		mobile: mobile
	        	});
	        }
	    });
	}

}]);
