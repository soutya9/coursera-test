(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        console.log("in LunchCheckController function");
        $scope.checkIt = function() {
            console.log("in checkIt function");
            var itemsList = 0;
            $scope.message = "";
            if (!$scope.items) {
                $scope.message = "Enter data!";
            } else {
                var itemsListVal = $scope.items.split(',');
                var i;
                for (i = 0; i < itemsListVal.length; i++) {
                    if (itemsListVal[i].trim().length > 0)
                        itemsList++;
                }
                console.log(itemsList);
                if (itemsList <= 3) $scope.message = "Enjoy!";
                else $scope.message = "Too much!";
            }
            $scope.itemsList = itemsList;
        };
    }
})();
