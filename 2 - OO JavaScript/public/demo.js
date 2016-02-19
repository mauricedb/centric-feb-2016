/**
 * Created by maurice on 2/18/2016.
 */

(function () {
    'use strict';

    function createPerson(name) {


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
            console.log(this);
            console.log('In doe iest voor', this.name);
        }

        Person.prototype.add= function(x){
            return this + x;
        }

        return new Person(name);
    }


    var maurice =createPerson('Maurice');
    var piet = createPerson('Piet');

    maurice.doIets()
    piet.doIets()

    console.log(piet.add(1));
    console.log(piet.add.call(1, 2));
    console.log(piet.add.apply(1, [2]));



    var fn = piet.doIets;//.bind({name:'bound'});
    //fn();

    fn.apply({name:'apply'})
    fn.call({name:'call'})
    fn.call(1);


    var o = {
        name: 'hsdvbsabvkj',
        xxxx: fn
    };

    o.xxxx();

    o['the-name'] = ''

    function add(x,y,z){
        return x + y + z;
    }
    console.log(add(1,2,3));

    var add1 = add.bind(null, 1);
	console.log(add1(2,3));
    var add2 =add.bind(null, 1, 2);
    console.log(add2(2));

    

}())

