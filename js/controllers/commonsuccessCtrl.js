
 
starter.controller("commonsuccessCtrl", ["$scope", "$stateParams", function ($scope, $stateParams) {
	// console.log($stateParams);
	angular.extend($scope, $stateParams);
}]);
