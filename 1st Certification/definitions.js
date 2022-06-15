/* FUNCTIONS */
function functionName(param1, param2) {
    return param1 + param2;
}

// Anonymous functions

const myFunc = function(args) {         /* OR */        const myFunc = (args) => {
  const myVar = "value";                              const myVars = "value";
  return myVar;                                       return myVars;
}                                                   }

// Arrow Function
//When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return
const myFunction = (args) => "value";
const doubler = (item) => item * 2;

// Default parameters
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); //Hello John
console.log(greeting()); //Hello Anonymous

// rest parameter
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany("string", null, [1, 2, 3], { })); //You have passed 4 arguments.

/* ------------------------------------------------------------------------- */

/* Switch */
switch (num) {
    case value1:
      statement1;
      break;
    case value2:
    case value3:
    case value4:
      statemente-2-3-4;
      break;
  //...
    default:
      defaultStatement;
      break;
}

/* Conditionals and booleans */
function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    else {  //else if
        return "It was false";
    }
}
  
test(true);
test(false);

// conditional operator ?
//The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

/*                                          LOOPS                                    */

const ourArray = [];
let i = 0;
//while
while (i < 5) {
    ourArray.push(i);
    i++;
}
//for
for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

//do while. por lo menos se ejecuta una vez
do {
    ourArray.push(i);
    i++;
} while (i < 5);
