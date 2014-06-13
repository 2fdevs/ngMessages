'use strict';

angular.module('ngmessagesApp')
    .controller('ContactCtrl', function ($scope) {
        $scope.isSubmitted = false;
        $scope.submit = function(){
            $scope.isSubmitted = true;

            console.log($scope.myForm.$error);
        };
    });
