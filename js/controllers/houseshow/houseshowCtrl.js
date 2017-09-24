/**
 * Created by gbh on 2017/07/17.
 */

starter.controller("houseshowCtrl", ["$scope", "httpSvc", "$stateParams",
	function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);

	$scope.scrollHeight=document.getElementsByClassName("view-container")[0].clientHeight-document.getElementsByClassName("tab-nav")[0].clientHeight;
    $scope.grid_height={height:''+$scope.scrollHeight+'px'};

    $scope.list={};

    $scope.data={
    	style: 0,
    	layout: 0,
    	texture: 0,
    	acreage: 0,
    	distance: 0
    }

    $scope.getList=function(){
    	httpSvc.post("/prototype/prototype/list", {
	        style: $scope.data.style,  
	        layout: $scope.data.layout, 
	        texture: $scope.data.texture, 
	        acreage: $scope.data.acreage, 
	        distance: $scope.data.distance,  
	    }).then(function(data) {
	    	$scope.list= data.response;
	    });
    }
    $scope.getList();

    $scope.selcet=function(index){
    	$scope.index=index;
    	$scope.isShow=index;
    }

    $scope.aindex=-1;
    
    $scope.selcetstyle=function(index,id,attr){
    	$scope.aindex=index;
    	$scope.isShow=-1;

    	switch(attr){
			case 1:
			    $scope.data.style=id;
			    break;
			case 2:
			    $scope.data.layout=id;
			    break;
		    case 3:
		    	$scope.data.texture=id;
		        break;
		    case 4:
		    	$scope.data.acreage=id;
		        break;
		    case 5:
		    	$scope.data.distance=id;
		        break;
			default:
			    break;
		};

    	$scope.getList();
    }

    httpSvc.post("/api/attribute/index", {
        identifier:2   
    }).then(function(data) {
        $scope.styleList=data.response;   
    });


}]);
