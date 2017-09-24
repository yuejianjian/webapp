
/**
 * Created by gbh on 2017/08/25.
 */

starter.controller("yuyue2Ctrl", ["$scope", "httpSvc", "$stateParams"
	,function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);

 //    httpSvc.post("/article/article/details", {
 //         aid: $stateParams.aid
 //    }).then(function(data) {
 //        $scope.detail=data.response;
 //    });
 console.log($stateParams.name);
  console.log($stateParams.mobile)

}]);
