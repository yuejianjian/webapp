/**
 * Created by gbh on 2017/08/21.
 */

starter.controller("modellistCtrl", ["$scope", "httpSvc", "$stateParams",
	function ($scope, httpSvc, $stateParams) {
	angular.extend($scope, $stateParams);
	console.log($stateParams.suit_id);

	httpSvc.post("/suit/prototype/list",  {
        suitId: $stateParams.suit_id
    }).then(function(data) {
        $scope.modellist=data.response;
    });

}]);

