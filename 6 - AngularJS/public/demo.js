/**
 * Created by maurice on 4/13/2016.
 */


(function(){
    var app = angular.module('app', []);

    app.controller('DemoController', function($scope){

        $scope.person = {
            firstName: 'Maurice',
            lastName: 'de Beijer'
        };


    })

}());