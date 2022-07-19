// inheritance has 3 steps
// first step: make an instance of the supertype (or parent)

function Animal() { } //empty constructor

Animal.prototype = { //supertype
  constructor: Animal,
  eat: function() {
    return "nom nom nom";
  }
};

let animal = Object.create(Animal.prototype); // Object.create(obj) creates a new object, and sets obj as the new object's prototype
// its similar to let animal = new Animal();, but this have some disadvantages
animal.eat();
animal instanceof Animal; //True

// second step:  set the prototype of the subtype (or child). in this case, Bird—to be an instance of Animal.
function Bird() {}
// ChildObject.prototype = Object.create(ParentObject.prototype);
Bird.prototype = Object.create(Animal.prototype); // the prototype is like the "recipe" for creating an object.
Bird.prototype.constructor = Bird; // all instances of Bird should show that they were constructed by Bird and not Animal

// ChildObject.prototype.methodName = function() {...};
Bird.prototype.fly = function() { // if you want to add behavior that is unique to Bird objects.
    return "I'm flying!";
};

let duck = new Bird("Donald");
duck.eat(); //duck inherits all of Animal's properties, including the eat method.
duck.fly(); // log: I'm flying!.


// inheritance does not work well for unrelated objects like Bird and Airplane.
// mixins allows other objects to use a collection of functions.

let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};
  
let plane = {
    model: "777",
    numPassengers: 524
};
  
flyMixin(bird);
flyMixin(plane);
// Now bird and plane can both fly:
bird.fly();  //Flying, wooosh!
plane.fly();  //Flying, wooosh!

// private properties. the variable can only be accessed and changed by methods also within the constructor function.
function Bird() {
    let weight = 15; // private property

    this.getWeight = function () { // is a privileged method, because it has access to the private variable weight.
      return weight;
    };
  
}