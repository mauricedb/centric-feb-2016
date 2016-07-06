/**
 * Created by maurice on 6/1/2016.
 */


describe('The Angular App', function () {

    beforeEach(module('mainApp'));

    describe('the people service', function(){
        var svc;

        beforeEach(inject(function (people) {
            svc = people;

        }))

        it('can query', function(){
            var data = svc.query();

            expect(data.length).toBe(3);

        })


    })


    describe('the controller', function(){
        var ctr, scope;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();

            ctr = $controller('DemoController', {
                $scope: scope
            });

        }));

        it('has a message on the scope', function(){

            expect(scope.message).toBe('Hello there');
        })
    })
});