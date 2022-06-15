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
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);