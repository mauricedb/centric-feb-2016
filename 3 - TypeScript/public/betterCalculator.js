var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var x = document.getElementById('x');
var y = document.getElementById('y');
var result = document.getElementById('result');
var add = document.getElementById('add');
//function Calculator() {
//}
//
//Calculator.prototype.add = function (x: number, y: number): number {
//    return x + y;
//};
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        return numbers.reduce(function (p, c) { return p + c; }, 0);
    };
    return Calculator;
})();
add.addEventListener('click', function () {
    var calc = new Calculator();
    result.innerText = calc.add(+x.value, +y.value).toString();
});
var o = {
    x: 1
};
var o2 = o;
console.log(o.x);
console.log(o2.y);
var Animal = (function () {
    function Animal(name) {
        var _this = this;
        this.name = name;
        this.age = 10;
        //this.fn = function () {
        //    console.log(this.name + ' is eating')
        //}
        this.fn = function (x) { return console.log(_this.name + ' is eating', x); };
    }
    Animal.prototype.eat = function () {
        console.log(this.name + ' is eating');
    };
    return Animal;
})();
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        _super.call(this, name);
        this.color = color;
    }
    Cat.prototype.sleep = function () {
    };
    Cat.prototype.wakeup = function () {
    };
    return Cat;
})(Animal);
var zorro = new Cat('Zorro', 'black');
var anyZorro = zorro;
console.log(anyZorro.name);
var eater = zorro;
eater.eat();
var sleepy = zorro;
sleepy.sleep();
var o3 = {
    sleep: function () {
    },
    nap: function () {
    },
    wakeup: function () {
    }
};
var sleepy2 = o3;
$.ajax('/api/demo');
_.forEach([], function () { });
_.for;
//# sourceMappingURL=betterCalculator.js.map