/**
 * Created by maurice on 3/17/2016.
 */


function Printer() {
}


Printer.prototype.print = function (result) {
    console.log('REsult', result);
}


function Printer2() {
}


Printer2.prototype.print = function (result) {
    console.log('REsult in printer2', result);
}

function Calculator(printer) {
    this.printer = printer;

}

Calculator.prototype.add = function (x, y) {
    var result = x + y;
    this.printer.print(result);
    return result;
};


function build(type){

    if (type.inject){
        var subType = window[type.inject];
        var subObject = build(subType);
        return new type(subObject);
    }

    return new type();
}


Calculator.inject = 'Printer2';

var calc = build(Calculator);
console.log(calc.add(1, 2));