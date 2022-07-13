/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    let numbers = [];

    arr.sort(function(a,b){
        return a - b;
    });

    for (let i = arr[0]; i <= arr[1]; i++) {
        numbers.push(i);
    }

    for (let i = 1; true; i++) {
        let divisor = arr[1] * i;

        if (numbers.every((number) => divisor % number == 0)) {
        return divisor;
        }
    }
}
  
smallestCommons([1,5]);

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    while (!func(arr[0]) && arr.length > 0) {
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

// ***********************************************************
// ***********************************************************
// ***********************************************************