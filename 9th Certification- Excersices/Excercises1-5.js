/*
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let suma = 0;

    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i <= arr[1] - arr[0]; i++) {
        suma += arr[0] + i;
    }
    return suma;
};

console.log(sumAll([65, 63]));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. 

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
*/

function diffArray(arr1, arr2) {
    const newArr = [];

    function check(first, second) {
        first.map(function(value) {
            if (second.indexOf(value) === -1) {
                newArr.push(value);
            }
        });
    };

    check(arr1, arr2);
    check(arr2, arr1);

    return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
    for (let i = 1; i < arguments.length; i++) {
        while (arr.indexOf(arguments[i]) !== -1) {
            arr.splice(arr.indexOf(arguments[i]), 1);
        }
    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, 
that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
    const sourceProp = Object.keys(source);

    return collection.filter(arr => {
        for (let i = 0; i < sourceProp.length; i++) {
            if (arr[sourceProp[i]] !== source[sourceProp[i]] ||
                (!arr.hasOwnProperty(sourceProp[i]))) {
                return false;
            }
        }
        return true; // si recorrio todo el ciclo y no hubo nada falso devuelve el array
    });
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

// ***********************************************************
// ***********************************************************
// ***********************************************************

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1 $2") // es para separar los strings del tipo "thisIsSpinalTap"
        .toLowerCase()
        .trim()
        .split(/\s+|_+/g) //separa por espacios o caracteres especiales
        .join('-');
}

console.log(spinalCase('This Is Spinal Tap'));