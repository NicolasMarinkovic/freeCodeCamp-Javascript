//  prototype.   Properties in the prototype are shared among ALL instances of Bird.
// All instances automatically have the properties on the prototype.
function Bird(name) {
    this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let ducks = new Bird("Donald");

//A more efficient way is to set the prototype to a new object that already contains the properties. 
Bird.prototype = {
    constructor: Bird, //always define the constructor property:
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// isPrototypeOf()
Bird.prototype.isPrototypeOf(duck);

//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

ownProps = [];
let prototypeProps = [];

for (let property in ducks) {
    if (ducks.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps); //["name"]
console.log(prototypeProps); //["numLegs"]

//constructor property is a reference to the constructor function that created the instance. 
//The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.
duck = new Bird();

console.log(duck.constructor === Bird);


/*
Because a prototype is an object, a prototype can have its own prototype! 
In this case, the prototype of Bird.prototype is Object.prototype:
*/

function Bird(name) {
    this.name = name;
}

typeof Bird.prototype;

Object.prototype.isPrototypeOf(Bird.prototype);

let duck = new Bird("Donald");
duck.hasOwnProperty("name");
// PROTOTYPE CHAIN

/* The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.
prototype, which can then be accessed by duck. This is an example of the prototype chain. 
In this prototype chain, Bird is the supertype for duck, while duck is the subtype. 
Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. 
Therefore, any object can use the hasOwnProperty method. */

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};