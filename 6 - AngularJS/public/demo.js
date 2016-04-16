/**
 * Created by maurice on 4/13/2016.
 */


(function () {

    var app = angular.module('myApp', ['ngRoute']);

    app.factory('demoSvc', function($http){


        return {
            hello: function( firstName){
                console.log('Hello' , firstName);
            }
        }
    });

    app.controller('DemoController', function ($scope, $http, demoSvc) {

        console.log('In demo controller');

        var model = {
            firstName: 'Maurice',
            lastName: 'de Beijer'
        };

        demoSvc.hello(model.firstName);

        $scope.model = model;


        $scope.people = [

            model,
            {
                firstName: 'Jan',
                lastName: 'de Beijer'
            }, {
                firstName: 'Piet',
                lastName: 'de Beijer'
            }, {
                firstName: 'Klaas',
                lastName: 'de Beijer'
            }]

        $scope.addPerson = function(){
            $scope.people.push({firstName : ''});
        }
    })
}());