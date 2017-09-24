/**
 * Created by gbh on 2017/08/21.
 */

starter.controller("packageCtrl", ["$scope", "httpSvc", "$stateParams",
    function ($scope, httpSvc, $stateParams) {
        angular.extend($scope, $stateParams);
        console.log($stateParams);

        httpSvc.post("/spread/spread/details", {//广告列表
            /*spreadId: $stateParams.category*/
            /* spreadId:$stateParams.spreadId*/
            /*pid:$stateParams.pid*/
            spreadId:405
        }).then(function(data) {
            console.log(data);
            $scope.adImg=data.response;
        });
        httpSvc.post("/suit/suit/list", {   ///suit/suit/suit_price?category=1 套装列表
            /* attribute:$stateParams.attribute*/
            /*category:$stateParams.category*/
            category:$stateParams.category
        }).then(function(data){
            $scope.packageList=data.response.suit_list;
            $scope.piclist=data.response.pic_list;
        });
        /* httpSvc.post("/suit/suit/list", {   ///suit/suit/suit_price?category=1
             /!* attribute:$stateParams.attribute*!/
             category:2
         }).then(function(data){
             $scope.packageList=data.response;
             $scope.piclist=data.response;
         });*/
    }]);