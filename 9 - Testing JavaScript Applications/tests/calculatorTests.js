/**
 * Created by maurice on 6/1/2016.
 */

describe('The calculator', function () {

    it('add 0 + 0', function () {
        var sum = calculator.add(0, 0);

        expect(sum).toBe(0);

    })

    it('add 1  + 2', function () {
        var sum = calculator.add(1, 2);

        expect(sum).toBe(3);

    })

    it('add 1  + 2', function () {
        spyOn(calculator, 'add').and.returnValue(10);
        var sum = calculator.add(1, 2);

        expect(sum).toBe(10);

    })

    it('add 0.1  + 0.2', function () {
        var sum = calculator.add(0.1, 0.2);

        expect(sum).toBeCloseTo(0.3, 15);

    })

    it('return objct', function () {
        var o = {x: 1};
        var result = calculator.doStuff(o);

        expect(result).toEqual(o);

    })

    it('is async', function(done){
        setTimeout(function(){
            done();
        }, 200);
    })
});