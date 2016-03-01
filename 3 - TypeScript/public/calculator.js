var x = document.getElementById('x');
var y = document.getElementById('y');
var result = document.getElementById('result');
var add = document.getElementById('add');

function Calculator() {
}

Calculator.prototype.add = function (x, y) {
    return x + y;
};


add.addEventListener('click', function() {
    var calc = new Calculator();
    result.innerText = calc.add(x.value, y.value);
});
