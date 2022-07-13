/*
Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy.
 So changing a value in newArr would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments passed to the function,
 and not on any global object or variable.
*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
    let newArr = [...arr];
    newArr.push(bookName);
    return newArr;

}


function remove(arr, bookName) {
    let newArr = [...arr];
    if (newArr.indexOf(bookName) >= 0) {
        newArr.splice(newArr.indexOf(bookName), 1);
        return newArr;
    }
}
let newArr = add(bookList, "A Brief History of Time");
let newArrs = remove(bookList, "Disquisitiones Arithmeticae");
console.log(newArr, newArrs);