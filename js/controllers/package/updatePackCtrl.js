/**
 * Created by gbh on 2017/08/22.
 */

starter.controller("updatePackCtrl", ["$scope", "httpSvc", "$stateParams"
	,function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);

	httpSvc.post("/spread/spread/details", {
        spreadId: 406
    }).then(function(data) {
        $scope.adImg=data.response[0].ad_code;
    });

    httpSvc.post("/homeup/homeup/list", {

    }).then(function(data) {
        $scope.list=data.response;

    });



}]);
