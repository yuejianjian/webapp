
/**
 * Created by gbh on 2017/08/15.
 */

starter.controller("modifyLoginPwdCtrl", ["$scope", "httpSvc", "$state" ,"$stateParams", "$timeout", "util",
	function ($scope, httpSvc, $state, $stateParams, $timeout, util ) {
	angular.extend($scope, $stateParams);

    $scope.pwdRegx = "[a-zA-Z0-9]*";

    $scope.data = {};  
    $scope.save = function(dataForm){
        $scope.valid=true; 
        if(dataForm.$valid){//成功为 true 否则为 false  
            $scope.login();  
        }  
    }  


    $scope.login = function (){
        httpSvc.post("/user/user/modifypass", {
            password: $scope.data.oldpwd,
            confirmPassword: $scope.data.newpwd2
        }).then(function(data) {
            console.log(data);
            if(data.code==0){
                $scope.error=true;
                $scope.errorMsg=data.msg;
            }else if(data.code==1){
                $rootScope.token=data.response.token;
                history.back();
            }
        });
    };  

}]);
