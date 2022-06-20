//If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
// One way to test a regex is using the .test() method
let myString = "Hello, World!";
let myRegex = /Hello/;
myRegex.test(myString); // returns true or false

//podes buscar varios con el operador or = '|'
let myRegexx = /perro|gato/;

//the flag that ignores letter case - the i flag
let fccRegex = /freeCodeCamp/i; //FrEECODecamp será true tambien



/*.match()  extract the actual matches you found */
"Hello, World!".match(/Hello/); //return ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); //return ["expressions"]

//To search or extract a pattern more than once, you can use the global search flag: g.
let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); //returns the value ["Repeat", "Repeat", "Repeat"]

/*
Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string');
*/

//Wildcard Period (.). Ff you wanted to match hug, huh, hut, and hum, you can use the regex /hu./
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); //true
huRegex.test(hugStr); //true