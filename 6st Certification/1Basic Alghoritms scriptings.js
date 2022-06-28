/*Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

function reverseString(str) {
    let j = str.length -1;
    let trs = "";
    for (let i = 0; i < str.length; i++) {
        trs += str[j];
        j--;
    }
    return trs;
}
  
reverseString("hello");

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */

function factorialize(num) {
    let element = num;
    if (num > 0){
    for (let i = 0; i < num; i++) {
        element *= i;
        }
    }else if (num = 0){
        return 1;
    }
    return num;
}
  
factorialize(5);

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
    let max = 0;
    // El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
    let wordsArr = str.split(' '); //cadena.split([separador][,limite]) limite es opcional
    let word = '';
    
    for (let i = 0; i < wordsArr.length; i++) {
        if (max < wordsArr[i].length) {
            max = wordsArr[i].length;
            word = wordsArr[i];
        }
    }
    return "The word length is " + max + " and it is " + word;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
    let newArr = [];
    let max = -99999;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 4; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        newArr.push(max);
        max = -99999;
    }

    return newArr;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
    let targetRegex = new RegExp(target + "$", "i"); // /n$/i
    return targetRegex.test(str);
}
  
confirmEnding("Bastian", "n");

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
    let newStr = ''; 
    if (num > 0){
        for (let i = 0; i < num; i++) {
            newStr += str;
        }
    }
    return newStr;
}
  
repeatStringNumTimes("abc", 3);

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending. */

function truncateString(str, num) {
    let newStr = str.slice(0, num);
    if (num < str.length) {
        newStr += "...";
    }
    return newStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.*/

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
        if (func(num) === true){
            return num;
        }
    }
    return undefined;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);