/**
 * Created by gbh on 2017/07/28.
 */

starter.controller("packageDetailCtrl", ["popupSvc","$scope", "$http", "$stateParams", "httpSvc",
	function (popupSvc,$scope, $http, $stateParams, httpSvc) {
	angular.extend($scope, $stateParams);

	console.log($stateParams.suit_id);

	$scope.suit_id=$stateParams.suit_id;

	httpSvc.post("/suit/suit/details", {
        suitId:$stateParams.suit_id,
    }).then(function(data) {
        $scope.packageDetail=data.response;
    });
    /*httpSvc.post("suit/suit/suit_price", {
       category:1
    }).then(function(data) {
        $scope.packageDetail=data.response;
    });*/

    httpSvc.post("/suit/bom/list", {
        suitId:$stateParams.suit_id,
    }).then(function(data) {
        $scope.material=data.response;
    });


	$scope.changeIndex=function(index){
		$scope.navIndex=index;
	}
	//显示计算器
	$scope.showCalc=function(){
		$scope.isShowCalc=!$scope.isShowCalc;
	}
	//显示电话
	$scope.showTel=function(){
		$scope.isShowTel=!$scope.isShowTel;
	}


	//显示预约
	$scope.showYuyue=function(){
		$scope.isShowYuyue=!$scope.isShowYuyue;
		if($scope.isShowYuyue){
			console.log(1111);
		}
	}

	$scope.yuyue=function(){
		httpSvc.post("/suit/appointment/index", {
	        suitId: $stateParams.suit_id,
	        name: $scope.name,
	        mobile: $scope.mobile,
	        token: ""
	    }).then(function(data) {
	        $scope.isShowYuyue=!$scope.isShowYuyue;
	        $scope.showTip=true;
	        $scope.tip=data.msg;
	    });
	}


 	//全屏图片显示
	$scope.lookBigimg=function(){
		$scope.isShowBigimg=!$scope.isShowBigimg;
	}

	$scope.scrollHeight=document.getElementsByClassName("view-container")[0].clientHeight-document.getElementsByClassName("footer-box")[0].clientHeight;
    $scope.grid_height={height:''+$scope.scrollHeight+'px'};

	  var myScroll=document.getElementById("myscroll");
	  var headerBox=document.getElementsByClassName("header-box")[0];
	  var navBox2=document.getElementsByClassName("nav-box2")[0];
	  var navBox=document.getElementsByClassName("nav-box")[0];
	  var navBoxScrollHeight=navBox.offsetTop-navBox.clientHeight;

	  var myScrollTop,myScrollLeft;
	  myScroll.onscroll=function(){
	    var nowTransform = myScroll.getElementsByClassName("scroll")[0].style.transform;
	    if(nowTransform){                   //ios
	    var startIndex = nowTransform.indexOf('(')+1;
	    var endIndex = nowTransform.indexOf(')');
	    var nowTranslate = nowTransform.substring(startIndex,endIndex);
	    var translateArr = nowTranslate.split(",");
	    myScrollLeft=translateArr[0];
	    myScrollTop=translateArr[1];
	    }else{
	        myScrollTop =document.getElementById("myscroll").scrollTop;
	        myScrollLeft =document.getElementById("myscroll").scrollLeft;
	    }
	    myScrollTop=myScrollTop.replace("px","");
	    headerBox.style.display = 'none';
	    navBox2.style.display = 'none';
	    if(myScrollTop<-10){
	      headerBox.style.display = 'block';
	    }
	    if(myScrollTop<-navBoxScrollHeight){
		  navBox2.style.display = 'block';
	    }
	  }

}]);
