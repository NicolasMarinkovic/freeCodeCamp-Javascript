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