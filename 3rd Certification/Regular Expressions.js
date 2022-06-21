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

// character classes ([ and ]).  You want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); //["big"]
bagStr.match(bgRegex); //["bag"]
bugStr.match(bgRegex); //["bug"]
bogStr.match(bgRegex); //null

// (-) define a range of characters to match
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegexx = /[a-e]at/; //buscará letras desde a hasta e (por abecedario)
catStr.match(bgRegexx); //["cat"]
batStr.match(bgRegexx); //["bat"]
matStr.match(bgRegexx); //null


// negated character sets
// (^) create a negated character set. /[^aeiou]/gi matches all characters that are not a vowel
let quoteSample = "3 blind mice.";
let myRegexxx = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegexxx);

// (+) matches characters appears one or more times in a row
let difficultSpelling = "Mississippi";
let myRegexs = /s+/ig; // Change this line
let results = difficultSpelling.match(myRegexs); //[ 'ss', 'ss' ]

// (*) matches characters that occur zero or more times.
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); //["goooooooo"]
gPhrase.match(goRegex); //["g"]
oPhrase.match(goRegex); //null

// ^ also serach for patterns at the beggining f the strings
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); //true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //false

// ($) search for patterns at the end of strings
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //false