/* Template literals allow you to create multi-line strings and to use string interpolation features to create strings. */
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
//usa  backticks (`)  en vez de las comillas normales (' or ").
const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`; // ${variable} or you can include other expressions in your string literal like ${a + b}

console.log(greeting);

// template literals in objects and functions
const people = {
    name: "Taylor",
    sayHello: function(newName) { // simplemente podes poner sayHello(). El : function() no es necesario
        this.name = newName;
        return `Hello! My name is ${this.name}.`;
    }
};