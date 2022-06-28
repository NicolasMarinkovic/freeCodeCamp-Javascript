/*Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false. */

function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}
  
console.log(booWho(null));

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */
function titleCase(str) {
    let strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1).toLowerCase();
    }

    str = strSplit.join(" "); // join() realiza lo contrario a split (une).
    return str;
}
  
console.log(titleCase("I'm a little tea pot"));

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice(); //lo hago igual al arr2 sin modificarlo despues

    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]); // no borra nada pero agrega el arr1 en el offset de n
      n++; //aumento para aumentar el offset hasta que termine de agregarse el arr1
    }
    return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
console.clear();
/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */

function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]){
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}
  
console.log(bouncer([7, "ate", "", false, 9]));

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*
Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is 
greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has 
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
}

/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */

function mutation(arr) {
    let targetRegex; 
    let target;

    for (let i = 0; i < arr[1].length; i++) {
        target = arr[1].charAt(i);
        targetRegex = new RegExp(target, "i");
        if (! targetRegex.test(arr[0])) {
            return false;
        }
    }

    return true;
}
  
console.log(mutation(["hello", "leh"]));

//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

/*Write a function that splits an array (first argument)
 into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let sizeDiv = arr.length/size;
    for (let i = 0; i < sizeDiv; i++) {
        newArr.push(arr.slice(0,size));
        arr.splice(0,size);
    }
    
    return newArr;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));