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