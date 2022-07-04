// objects: tangible things people can observe and interact with.
// qualities, or properties, define what makes up an object. Ex: A car has wheels. Shops sell items. Birds have wings.

// Methods are properties that are functions. This adds different behavior to an object

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() { return "The name of this duck is " + this.name + "."; } //this refers to the object that the method is associated with: duck
};
duck.sayName();


// Constructors
//Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object.
function Bird(args, args1, args2) {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();
/*
Constructors follow a few conventions:

*Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.

*Constructors use the keyword this to set properties of the object they will create. 
Inside the constructor, this refers to the new object it will create.

*Constructors define properties and behaviors instead of returning a value as other functions might.
*/

function Birds(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let cardinal = new Birds("Bruce", "red");

//instanceof allows you to compare an object to a constructor, returning true or false
cardinal instanceof Bird; //true

//The following code adds all of the own properties of duck to the array ownProps:
let ownProps = [];

for (let property in cardinal) {
    if (cardinal.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);

// anonymous function
(function () {
    console.log("Chirp, chirp!");
})();  //  executes right away, and outputs Chirp, chirp! immediately.

/*
Note that the function has no name and is not stored in a variable. 
The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
This pattern is known as an immediately invoked function expression or IIFE. This is often used to group related functionality into a single object or module
*/
// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule
let motionModule = (function () {
    return {
      glideMixin: function(obj) {   //We can group these mixins into a module
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {     //We can group these mixins into a module
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
})();

motionModule.glideMixin(duck);
duck.glide();