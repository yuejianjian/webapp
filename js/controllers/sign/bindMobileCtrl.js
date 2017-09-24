
/**
 * Created by gbh on 2017/08/15.
 */

starter.controller("bindMobileCtrl", ["$scope", "$state","LoginService","popupUtil" ,"$stateParams", "$timeout", "util",
	function ($scope, $state, LoginService, popupUtil, $stateParams, $timeout, util ) {
	angular.extend($scope, $stateParams);


    var countDown = util.countDown({ timer: 60 });
    $scope.codeText="发送验证码"

    $scope.getCaptcha=function(){
        console.log(1111);
        countDown.run(function(s) {
            $scope.codeText = "重新发送(" + s + ")";
            flag = true;
        }, function() {
            flag = false;
            $scope.codeText = "发送验证码";
        })
    }
    // $scope.getCaptcha();

	$scope.mobileRegx = "^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\\d{8}$";
	$scope.emailRegx = "^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$";
	$scope.pwdRegx = "[a-zA-Z0-9]*";
	$scope.data = {}; 
	$scope.change = false;  
	$scope.pwd = false;    
    $scope.save = function(dataForm){  
        if(dataForm.$valid){//成功为 true 否则为 false  
            $scope.login();  
        }  
    }  
      
    $scope.login = function (){  
        if($scope.data.confirmPassword == $scope.data.newPassword){  
            delete $scope.data.confirmPassword;  
            LoginService.changepassword($scope.data)  
            .$promise.then(function(resp){  
                if(resp.success){//修改成功  
                    popupUtil.showAlert('提示','密码修改成功');  
                      
                    $state.go('login');//跳转登录页面  
                      
                }else{  
                    popupUtil.showAlert('提示','密码修改失败');  
                }  
            }, function(err){  
                  
            });  
        }else{  
            popupUtil.showAlert('提示','两次密码输入不正确');  
        }  
    };  

}]);
