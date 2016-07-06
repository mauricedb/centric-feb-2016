(function () {
    'use strict';


    angular.module('mainApp', [])
        .controller('DemoController', function ($scope, people) {
            $scope.message = 'Hello there';
            $scope.people = people.query();

            $scope.$watch('people', function (newPeople) {
            });


            $scope.$broadcast('Test', 1);
        })
        .factory('stuff', function(){
            return {};
        })
        .factory('people', function ($http, stuff) {
            var data = [
                {firstName: 'Maurice'},
                {firstName: 'Jack'},
                {firstName: 'Mike'}
            ];

            return {
                query: function () {
                    return data;
                }
            };
        });

}());

