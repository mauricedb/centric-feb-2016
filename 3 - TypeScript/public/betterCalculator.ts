var x = <HTMLInputElement>document.getElementById('x');
var y = <HTMLInputElement>document.getElementById('y');
var result = document.getElementById('result');
var add = document.getElementById('add');

//function Calculator() {
//}
//
//Calculator.prototype.add = function (x: number, y: number): number {
//    return x + y;
//};


class Calculator {

    add(...numbers: number[]) {
        return numbers.reduce((p, c)=> p + c, 0);
    }
}


add.addEventListener('click', function () {
    var calc = new Calculator();
    result.innerText = calc.add(+x.value, +y.value).toString();
});


var o = {
    x: 1
};

var o2: any = o;
console.log(o.x);
console.log(o2.y);


class Animal {
//class Animal implements  CanEat{
    public age: number;
    public  fn: Function;

    constructor(private name: string) {
        this.age = 10;

        //this.fn = function () {
        //    console.log(this.name + ' is eating')
        //}
        this.fn = (x: number) => console.log(this.name + ' is eating', x);
    }

    eat() {
        console.log(this.name + ' is eating');
    }
}

interface CanEat {
    eat();
    sleep();
}


class Cat extends Animal {
    constructor(name: string, public color: string) {
        super(name);
    }

    sleep() {
    }

    wakeup() {
    }
}

var zorro = new Cat('Zorro', 'black');
var anyZorro: any = zorro;

console.log(anyZorro.name);

var eater: CanEat = zorro;

eater.eat();


var sleepy: {sleep(), wakeup()} = zorro;

sleepy.sleep();


var o3 = {
    sleep: function () {
    },
    nap: function () {
    },
    wakeup: function () {
    }
};

var sleepy2: {sleep(), wakeup()} = o3;


$.ajax('/api/demo');

_.forEach([], () => {});
_.for