//.push() takes one or more parameters and "pushes" them onto the end of the array.
const arr1 = [1, 2, 3];
arr1.push(4);

//.pop() removes the last element from an array and returns that element.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); //6
console.log(threeArr); //[ 1, 4 ]

//unshift() adds the element at the beginning of the array.
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

//.shift() removes the first element and returns that element.
const anArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

//splice() remove any number of consecutive elements from anywhere in an array
//splice()'s 1sr param represents the index on the array from which to begin removing elements, while the 2nd param indicates the number of elements to delete.
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2); //['today', 'was', 'great']
//the third parameter, comprised of one or more element(s), to add to the array.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //[ 10, 11, 12, 13, 14, 15 ]

//slice()  copies or extracts a given number of elements to a new array
//the first arg is the index at which to begin extraction, and the second arg is the index at which to stop extraction (will not include the last element of the index)
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); //['snow', 'sleet']

//indexOf() takes an element as a parameter.And it returns the position or index. Or -1 if the element does not exist on the array
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); //-1
fruits.indexOf('oranges'); //2
fruits.indexOf('pears'); //1

// map() iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.
/*The first argument is the current element being processed. 
The second is the index of that element.
the third is the array upon which the map method was called. */
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name); // only uses the 1st argument
console.log(names);

const ratings = watchList.map(movie => // creo un array de objetos de otro array de objetos de misma longitud.
    ({ title: movie.Title, rating: movie.imdbRating }) // [{ title: 'Inception', rating: '8.8' },{ title: 'Interstellar', rating: '8.6' },{ title: 'The Dark Knight', rating: '9.0' }]
);

// filter() calls a function on each element of an array and returns a new array containing only the elements for which that function returns true
/*
The callback function accepts three arguments. The first argument is the current element being processed. 
The second is the index of that element and the third is the array upon which the filter method was called
*/
const clients = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);

const filteredList = watchList.map(movie =>
    ({ title: movie.Title, rating: movie.imdbRating })
).filter(movie => parseFloat(movie.rating) > 8);

// filter() escrita manualmente
// The global variable 
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    // Only change code above this line
    return newArray;
};

const new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});

// concat() join items end to end. It returns a new array and does not mutate either of the original arrays

[1, 2, 3].concat([4, 5, 6]); //[1, 2, 3, 4, 5, 6]

// reduce(). Array.prototype.reduce(). The reduce method iterates over each item in an array and returns a single value.
/*
The callback function accepts four arguments. The first argument is known as the accumulator, 
which gets assigned the return value of the callback function from the previous iteration, 
the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.
In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator.
*/

const usuarios = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const sumOfAges = usuarios.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); //64

const usersObj = usuarios.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

// sort() method sorts the elements of an array according to the callback function
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

ascendingOrder([1, 5, 2, 3, 4]); // [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1; // ? ->conditional operator
    });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']); //['z', 's', 'l', 'h', 'b']
/*
If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
*/

// split() method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression
const str = "Hello World";
const bySpace = str.split(" "); //["Hello", "World"]

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/); //["How", "are", "you", "today"]

//join() method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
const Arr = ["Hello", "World"];
const Str = arr.join(" "); //Hello World

// use split() && join ()
function sentensify(str) {
    return str.split(/\W/).join(" "); //\W los separa por caracteres que no sean letras o nros y join los une con espacios
}
console.log(sentensify("May-the-force-be-with-you")); //May the force be with you

// trim() elimina los espacios en blanco en ambos extremos del string

function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
urlSlug(" Winter Is  Coming "); //winter-is-coming

//every() method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not
const nums = [1, 5, 8, 0, 10, 11];

nums.every(function(currentValue) {
    return currentValue < 10;
}); //false

function checkPositive(arr) {
    return arr.every(value => value >= 0);
}
console.log(checkPositive([1, 2, 3, -4, 5])); //false

//some() similar a every(). pero este devuelve true si al menos 1 cumple la condición
const newNumbers = [10, 50, 8, 220, 110, 11];

newNumbers.some(function(currentValue) {
    return currentValue < 10;
});

//-----------------------------------------Math. ------------------------------------

// Math.random();  function that generates a random decimal number between 0 (inclusive) and 1 (exclusive)

function randomFraction() {

    return Math.random();

}

//Math.floor() to round the number down to its nearest whole number

function randomWholeNum() {

    return Math.floor(Math.random() * 10); //his technique will give us a whole number between 0 and 9

}

// Max Min
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}
//--------------------------------------------------------------------

// parseInt() function parses a string and returns an integer. Here's an example:
parseInt(string, radix); // radix especifica la base del nro. por ej si lo pones en 2 te trae en binario. (no es necesario radix)

const a = parseInt("007"); // returns integer 7. If the first character in the string can't be converted into a number, then it returns NaN


//Object.freeze()  prevent data mutation. NO DEJA QUE EL OBJETO SEA MODIFICADO
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// ##################################### ARITY FUNCTIONS #################################

//The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
//Here's an example:

function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function(y) {
        return x + y;
    }
}

const curried = x => y => x + y

curried(1)(2)
curried(1)(2) //would return 3.

//This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

const funcForY = curried(1);
console.log(funcForY(2)); // 3

//Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
    return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13