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
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };