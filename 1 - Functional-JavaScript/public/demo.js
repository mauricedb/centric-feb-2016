/**
 * Created by maurice on 2/4/2016.
 */


(function () {
    var x = 1;

}());


function demo() {
    'use strict';


    var o = 1;
    console.log(o);
}

demo();

(function () {
    'use strict';
    console.log(add);
    console.log(multiply);


    var add = function (x, y) {
        return x + y;
    }

    function multiply(x, y) {
        return x * y;
    }

    console.log('multiply', multiply(3, 2));
    console.log('add', add(3, 2));


    function createFunction() {
        return function (x, y) {
            return x + y;
        }
    }

    var fn = createFunction();
    console.log(fn(4, 5))
    console.log(fn.toString())


    function createCalculator() {
        var result = 0;

        return {
            add: function (x) {
                result += x;
            },
            subtract: function (x) {
                result -= x;
            },
            print: function () {
                console.log(result);
            }
        }
    }

    var calc = createCalculator();
    var calc2 = createCalculator();
    calc.print();
    calc.add(10);
    calc.print();
    calc.add(5);
    calc.print();
    calc.subtract(10);
    calc.print();
    calc2.print();

    console.log(calc.result);


    setTimeout(calc.print(), 1000);


    var data = [1, 2, 3, '4'];

    data[7] = 8;

    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        //sum += parseInt( data[i], 10);
        if (data[i] !== undefined) {
            console.log(i, data[i], (+data[i]))
            sum += (+data[i]);
        }
    }
    console.log('sum', sum);

    var product = 1;
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== undefined) {
            product *= (+data[i]);
        }
    }
    console.log('product', product);


    function loopOverArray(theData, fn) {

        for (var i = 0; i < theData.length; i++) {
            if (theData[i] !== undefined) {
                fn(+theData[i]);
            }
        }
    }

    sum = 0;
    product = 1;
    loopOverArray(data, function (n) {
        sum += n;
        product *= n;
    })
    console.log('sum', sum);

    //loopOverArray(data, function (n) {
    //    product *= n;
    //})
    console.log('product', product);

//data=[];
    sum = data.reduce(function (prev, current) {
        console.log('reducing', prev, current)
        return prev + (+current);
    }, 0);
    console.log('sum with reduce', sum);


    function addAll() {
       return [].reduce.call(arguments, function (p, c) {
            return p + c;
        }, 0);
    }

    console.log(addAll(1));
    console.log(addAll(1,2));
    console.log(addAll(1,2,3));

}())