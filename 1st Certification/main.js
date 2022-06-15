/*Data types*/
undefined, null, boolean, string, symbol, bigint, number, object;

// keywords declarations
var myNumber=7; //can write 2 variables with the same name
let myFirstName= "Nicolas"; //doesnt let you write 2 variables with the same name
const myPassion= "Programming"; //only reading variable
/*However, it is important to understand that objects (including arrays and functions) assigned to a variable using 
const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.*/
const s = [5, 6, 7];
s = [1, 2, 3]; // DA ERROR
s[2] = 45; // SE PUEDE

let sum = 1 + 1;
let resta = 1-1;
let mul = 1 * 1;
let div = 1/1;
let decimal = 5.5;
let reminder = 19 % 2; //1

sum += 5;
resta -= 5;
mul *= 5;
div /= 5;

// escaping characters
// You can use \ to write quotes ' or double quotes "" in strings.
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
/*
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

const myName = "Nicolas";
const myString = "My name is " + myName + " and I am well!";

let length = myName.length; //You can find the length of a String
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1]; //gets the last letter of firstname

// Array
const sandwich = ["peanut butter", "jelly", "bread"];
sandwich[0] = "jamon";
//multi-dimensional array
const teams = [["Bulls", 23], ["White Sox", 45, ["Boca",60]]];
teams[1][2][0] = "River";




//      comparison operators
1   ==  1;  /* true */                  3 ===  3;  // true
1   ==  2;  /* false */                 3 === '3'; // false
1   == '1'; // true
"3" ==  3 ; // true

1 !=  2,    /* true */                  3 !==  3  // false
1 != "1";   /* false */                 3 !== '3' // true
1 != '1';   /* false */                 4 !==  3  // true
1 != true  // false
0 != false // false

5   >  3;  /* true */                   6   >=  6  // true
7   > '3'; /* true */                   7   >= '3' // true
2   >  3;  /* false */                  2   >=  3  // false
'1' >  9;  /* false */                  '7' >=  9  // false

2   < 5; /* true */                      4   <= 5 // true
'3' < 7; /* true */                      '7' <= 7 // true
5   < 5; /* false */                     5   <= 5 // true
3   < 2; /* false */                     3   <= 2 // false
'8' < 4; /* false */                     '8' <= 4 // false

if (num > 5 && num < 10);               if (num > 10 || num < 5);

