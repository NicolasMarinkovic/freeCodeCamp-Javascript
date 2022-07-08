/*
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr){
    let suma = 0;

    arr.sort(function(a,b){
        return a - b;
    });

    for (let i = 0; i <= arr[1]-arr[0]; i++) {
        suma += arr[0]+i;
    }
    return suma;
};

console.log(sumAll([65,63]));

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
        first.map(function(value){
            if (second.indexOf(value) === -1){
                newArr.push(value);
            }
        });
    };

    check(arr1,arr2);
    check(arr2,arr1);

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