/**
 * Created by gbh on 2017/08/31.
 */

starter.controller("specialCtrl", ["$scope", "httpSvc", "$stateParams"
	,function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);

    httpSvc.post("/spread/spread/details", {
        spreadId: 7
    }).then(function(data) {
        $scope.adImg=data.response;
    });

}]);
