(function() {
    'use strict';
    angular.module('myFirstApp', [])
        .controller('myFirstController', function($scope) {
            $scope.name = 'Sourabh Patil';
            $scope.Hello = function() {
                return "Hello Fellas!"
            }

        });


})();
