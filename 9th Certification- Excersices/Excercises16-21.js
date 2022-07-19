//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
            console.log(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  }
  
//console.log(steamrollArray([1, [2], [3, [[4]]]]));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ")
        .map(function(binary){
          return parseInt(binary,2);
        })
    );
}
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  return (collection.every((value) => {
    return Boolean(value[pre])
  }))
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
{name: "Naomi", role: "", isBot: false}, 
{name: "Camperbot", role: "Bot", isBot: true}]
, "isBot"));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.
*/

function addTogether() {
  const [first, second] = arguments;

  if(!Number.isInteger(first)) {
    return undefined;
  };

  if (second === undefined) {
    return (second) => addTogether(first, second);
  }

  if (!Number.isInteger(second)) {
    return undefined;
  }

  return first + second;
}

console.log(addTogether(5,7));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
  
  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());

// ***********************************************************
// ***********************************************************
// ***********************************************************


