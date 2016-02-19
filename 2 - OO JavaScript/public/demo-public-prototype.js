/**
 * Created by maurice on 2/18/2016.
 */

(function () {
    'use strict';


    function Person(name) {
        if (!(this instanceof Person)) {
            throw  new Error("Please use new!");
        }
        //if (this === window) {
        //    throw  new Error("Please use new!");
        //}

        console.log(name);
        console.log(this)

        //if (name !== undefined) {
        this.name = name;
        //}

        //this.doIets = function(){
        //    console.log('In doe iest voor', this.name);
        //}
        //return this;
    }

    Person.prototype.doIets = function () {
        console.log('In doe iest voor', this.name);
    }

    var maurice = new Person('Maurice');
    var piet = new Person('Piet');

    maurice.doIets()
    piet.doIets()

    maurice.doIets = function () {
        console.log('Anders per object');
    }

    maurice.doIets()
    piet.doIets()
    console.log(maurice.name);

    piet.name = "Klaas";


    function Customer(name) {
        //this.__proto__.constructor.call(this,  name)
        Person.call(this, name);
    }

    Customer.prototype = new Person('')

    var klant = new Customer('Marie');
    klant.doIets();

    //Customer.prototype = {};
    Customer.prototype.doIets = 1;

    var klant2 = new Customer('Marie');
    try {
        klant2.doIets();
    }
    catch (e) {
        console.log(e)
    }

    Customer.prototype = new Person('');
    var klant3 = new Customer('Jack')
    klant3.doIets();
    //
    Person.prototype.print = function () {
    console.log('Printing', this.name)
    }

    //klant3.print = 1;

    console.log('klant3', typeof klant3);
    console.log('1',typeof 1);
    console.log('false',typeof false);
    console.log('new Date()',typeof new Date());
    console.log('[]', typeof []);
    console.log('NaN', typeof Number.NaN);
    console.log('null', typeof null);
    console.log('undefined', typeof undefined);

    if (typeof klant3.print === 'function'){
        klant3.print();
    }

}())

