/**
 * Created by gbh on 2017/07/10.
 */

starter.controller("homeCtrl",
 ["$scope", "$stateParams", "httpSvc","$ionicSlideBoxDelegate"
  ,function ($scope,$stateParams,httpSvc,$ionicSlideBoxDelegate) {
	angular.extend($scope, $stateParams);


	$scope.myActiveSlide = 1;

  $scope.scrollHeight=document.getElementsByClassName("view-container")[0].clientHeight-document.getElementsByClassName("tab-nav")[0].clientHeight;
  $scope.grid_height={height:''+$scope.scrollHeight+'px'};  

  var myScroll=document.getElementById("myscroll");
  var searchBox=document.getElementById("search-box");
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
    
    if(myScrollTop<-100){
      searchBox.style.display = 'block';
    }else{
      searchBox.style.display = 'none';
    }
  }

  
  httpSvc.post("/api/index/index", {
           
  }).then(function(data) {
      $scope.spriead=data.response.spriead;
      $ionicSlideBoxDelegate.update();
      $ionicSlideBoxDelegate.$getByHandle("slideboximgs").loop(true);
      $scope.gongge=data.response.gongge;
      $scope.gongge1=$scope.gongge.splice(0,$scope.gongge.length-1);
      $scope.gongge2=$scope.gongge.splice($scope.gongge.length-1,$scope.gongge.length)[0];

      $scope._prototype=data.response.prototype;
  });






}]);