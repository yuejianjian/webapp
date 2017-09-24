/**
 * Created by gbh on 2017/07/25.
 */

starter.controller("modelroomCtrl", ["$scope", "httpSvc", "$stateParams", 
	function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);

	$scope.changeIndex=function(index){
		$scope.navIndex=index;
	}
	//显示预约
	$scope.showYuyue=function(){
		$scope.isShowYuyue=!$scope.isShowYuyue;
	}

	$scope.showChoose=function(){
		$scope.isShowChoose=!$scope.isShowChoose;
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
	    }else{//android  
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
	
	//选择物料
	$scope.isChoose=false;
	$scope.chooseAll=function(){
		$scope.isChoose=!$scope.isChoose;
		$scope.isAllchoose=!$scope.isAllchoose;
	}
	//加入购物车
	$scope.addCar=function(){
		var list=document.getElementsByClassName("list");
		console.log(list[0].getElementsByTagName("input")[0].getAttribute("data-id"));
	}


	httpSvc.post("/prototype/prototype/details", {
        prototypeId: $stateParams.prototypeId 
    }).then(function(data) {
    	$scope.detail = data.response;
    });

    httpSvc.post("/prototype/bom/list", {
        prototypeId:$stateParams.prototypeId,
    }).then(function(data) {
        $scope.material=data.response;
    });

    $scope.yuyue=function(){
		httpSvc.post("/prototype/appointment/index", {
	        prototypeId: $stateParams.prototypeId,
	        name: $scope.name,
	        mobile: $scope.mobile,
	        userId: ""
	    }).then(function(data) {
	        $scope.isShowYuyue=!$scope.isShowYuyue;
	        $scope.showTip=true;
	        $scope.tip=data.msg;
	    });
	}


}]);
