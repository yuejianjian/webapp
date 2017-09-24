
/**
 * Created by gbh on 2017/08/22.
 */

starter.controller("articleCtrl", ["$scope", "httpSvc", "$stateParams"
	,function ($scope, httpSvc, $stateParams) {
        angular.extend($scope, $stateParams);

        httpSvc.post("/article/article/details", {
             aid:$stateParams.aid
        }).then(function(data) {
            $scope.detail=data.response.detail;
            console.log($scope.detail);
            $scope.goods=data.response.goods;
            $scope.abc=data.response.suit;
        });
}]);
