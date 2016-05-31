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
        .service('aaa', function () {
            this.query = function () {

            };

        })
        .factory('people', function ($http) {
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

