/* ...(Spread Operator) only works in place.(like in an argument to a function or in an array literal) */
//the spread operator unpacks all contents of an array into a comma-separated list
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];

/* -----------------------------------   Destructuring Syntax   ------------------------------------------- */
const user = { name: 'John Doe', age: 34 };

const { name, age } = user;
//const name = user.name;
//const age = user.age;

//assign a new variable name when extracting values
const { name: userName, age: userAge } = user; // userName is a new variable with the value of 'John Doe'

//for nested objects is similar

const users = {
    johnDoe: {
        ages: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

const { johnDoe: { ages, email } } = users;
const { johnDoe: { age: userAges, email: userEmail } } = user;

// Destructuring arrays
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // a, b, and c as 1, 2, 5.

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}

const profileUpdates = ({ name, age, nationality, location }) => {}