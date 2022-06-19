//In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttles = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeuz = new SpaceShuttles('Jupiter');
//The class syntax simply replaces the constructor function creation:

class SpaceShuttle { //class keyword declares a new function to which a constructor is added
    constructor(targetPlanet) { //The constructor method is a special method for creating and initializing an object created with a class
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter'); //The constructor is invoked when new is called to create a new object
console.log(zeus); // SpaceShuttle { targetPlanet: 'Jupiter' }

//Setters and getters
class Book {
    constructor(author) {
            this._author = author;
        }
        // getter
    get writer() {
            return this._author;
        }
        // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer); //anonymous
novel.writer = 'newAuthor';
console.log(novel.writer); //newAuthor


// Only change code below this line
class Thermostat {
    constructor(fahrenheitTemp) {
        this._thermos = fahrenheitTemp;
    }
    get temperature() {
        return 5 / 9 * (this._thermos - 32);
    }
    set temperature(celsiusTemp) {
        this._thermos = celsiusTemp * 9.0 / 5 + 32
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);