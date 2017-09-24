/**
 * Created by gbh on 2017/07/26.
 */

starter.controller("guideCtrl", ["$scope", "httpSvc", "$stateParams","$ionicSideMenuDelegate"
	,function ($scope, httpSvc, $stateParams,$ionicSideMenuDelegate) {
	angular.extend($scope, $stateParams);

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

	$scope.toggleRight = function() {
	    $ionicSideMenuDelegate.toggleRight();
	};

	$scope.list={};
    getArticle();
    function getArticle(){
    	httpSvc.post("/article/article/index", {
            cid: 0,  
        }).then(function(data) {
            $scope.list=data.response;
        });
    }

    httpSvc.post("/article/category/index", {
           
    }).then(function(data) {
        $scope.category=data.response;
    });

    $scope.categoryIndex=0;
    $scope.changeIndex=function(index){
    	$scope.categoryIndex=index;
    }

    var arr=[];
    
    $scope.check=function($event,id){
    	this.li.active=!this.li.active;
        if(this.li.active==true){
            arr.push(id);
        }else{
            arr.remove(id);
        }
    }

    $scope.search=function(){
        if(arr.length==0){
            $scope.toggleRight();
            getArticle();
        }else{
        	httpSvc.post("/article/article/index", { //装修指南文章列表
                cid: arr.join(","),  
            }).then(function(data) {
                $scope.toggleRight();
                $scope.list=data.response;
            });           
        }    
    }


}]);
