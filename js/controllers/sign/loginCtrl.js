
/**
 * Created by gbh on 2017/07/17.
 */

starter.controller("loginCtrl", ["$scope","base64", "$http", "$rootScope", "$state","httpSvc", "popupSvc", "$stateParams",
	function ($scope,base64, $http, $rootScope, $state, httpSvc, popupSvc, $stateParams) {
	angular.extend($scope, $stateParams);

	$scope.mobileRegx = "^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\\d{8}$";
	$scope.pwdRegx = "[a-zA-Z0-9]*";

	$scope.data = {};  
    $scope.save = function(dataForm){
        $scope.valid=true; 
        if(dataForm.$valid){//成功为 true 否则为 false  
            $scope.login();  
        }  
    }  
      




    $scope.login = function (){
        httpSvc.post("/user/login/index", {
            mobile: $scope.data.mobile,
            password: base64.encode($scope.data.pwd)
        }).then(function(data) {
            console.log(data);
            if(data.code==0){
                $scope.error=true;
                $scope.errorMsg=data.msg;
            }else if(data.code==1){
                $rootScope.token=data.response.token;
                // history.back();
                $state.go("tab.my");
            }
        });
    };  

    // $.ajax({
    //     type: "GET",
    //     url: "http://api.izsjia.com/user/user/getinfo",
    //     beforeSend: function(request) {
    //     request.setRequestHeader("token", $rootScope.token);
    //     },
    //     success: function(result) {
    //     console.log(result)
    //     }
    // });

}]);
