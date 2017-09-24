starter
.directive('thPlaceholder', function(){
    return {
        restrict: "A",
        link: function($scope, ele, attr){
            ele.bind("blur", function(){
                attr.placeholder = attr.thPlaceholder;
                console.log(attr.placeholder);
            })
        }
    }
})
