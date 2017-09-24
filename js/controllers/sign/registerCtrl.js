
/**
 * Created by gbh on 2017/08/15.
 */

starter.controller("registerCtrl", ["$scope", "$state","httpSvc","$stateParams", "util",
	function ($scope, $state, httpSvc, $stateParams, util ) {
	angular.extend($scope, $stateParams);

    $scope.mobileRegx = "^(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$";
    $scope.pwdRegx = "[a-zA-Z0-9]*";

    var countDown = util.countDown({ timer: 60 });
    $scope.codeText="发送验证码";

    var mobileReg=/^(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;


    $scope.getCaptcha=function(){
        if(mobileReg.test($scope.data.mobile)){
            httpSvc.post("/mutual/sms/index", {
                mobile: $scope.data.mobile
            })
            .then(function(data) {
               
            });
            countDown.run(function(s) {
                $scope.codeText = "重新发送(" + s + ")";
                flag = true;
            }, function() {
                flag = false;
                $scope.codeText = "发送验证码";
            })
        }else{
            $scope.error=true;
            $scope.errorMsg="请输入正确的手机号";
        }
    }

	
	$scope.data = {}; 
	$scope.save = function(dataForm){
        $scope.valid=true; 
        if(dataForm.$valid){//成功为 true 否则为 false  
            $scope.register();  
        }  
    }  
      

    $scope.register = function (){  
        httpSvc.post("/user/reg/index", {
            mobile: $scope.data.mobile,
            code: $scope.data.captcha,
            password: $scope.data.pwd,
        }).then(function(data) {
            console.log(data);
            if(data.code==0){
                $scope.error=true;
                $scope.errorMsg=data.msg;
            }else if(data.code==1){
                $state.go("login");
            }
        });
    };  
  

}]);
