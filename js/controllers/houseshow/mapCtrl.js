/**
 * Created by gbh on 2017/07/25.
 */

starter.controller("mapCtrl", ["$scope", "$stateParams",function ($scope, $stateParams) {
	angular.extend($scope, $stateParams);
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var geolocationControl = new BMap.GeolocationControl();
	map.addControl(geolocationControl);
	var point = new BMap.Point(114.316, 30.581);
	map.centerAndZoom(point, 15);
	// 编写自定义函数,创建标注
	function addMarker(point){
	var icon = new BMap.Icon('http://bpic.588ku.com/element_origin_min_pic/01/03/21/6956f43dc50dcc3.jpg', new BMap.Size(50, 50), {//是引用图标的名字以及大小，注意大小要一样
			    anchor: new BMap.Size(10, 30)//这句表示图片相对于所加的点的位置
			});
	  var marker = new BMap.Marker(point,{icon: icon});
	  function attribute(){
	  	   $scope.isShow=true;
		   var p = marker.getPosition();       //获取marker的位置
		   alert("marker的位置是" + p.lng + "," + p.lat);     
	  }
	  marker.addEventListener("click",attribute);
	  map.addOverlay(marker);
	}
	// 随机向地图添加5个标注
	var bounds = map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var lngSpan = Math.abs(sw.lng - ne.lng);
	var latSpan = Math.abs(ne.lat - sw.lat);
	for (var i = 0; i < 5; i ++) {
		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));		
		addMarker(point);
	}
}]);
