//If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
// One way to test a regex is using the .test() method
let myString = "Hello, World!";
let myRegex = /Hello/;
myRegex.test(myString); // returns true or false

//podes buscar varios con el operador or = '|'
let myRegexx = /perro|gato/;

//the flag that ignores letter case - the i flag
let fccRegex = /freeCodeCamp/i; //FrEECODecamp será true tambien

/* .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something. */
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); //The sky is blue.
//You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // \s es la character class de whitespaces

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

// curly brackets ({ and }) specify the lower and upper number of patterns
//to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; //Is not required to specify the upper limit. "{3,}" only requires a min of 3 and unlimit max. {3} requires exactly 3 matches
multipleA.test(A4); //true
multipleA.test(A2); //false

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

// "?"  specify the possible existence of an element. checks for zero or one of the preceding element
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true

// Lookaheads check for patterns further along.
// positive lookahead make sure the element in the search pattern is there
let quit = "qu";
let quRegex = /q(?=u)/;
quit.match(quRegex); //["q"]
// negative lookahead make sure the element in the search pattern is not there
let noquit = "qt";
let qRegex = /q(?!u)/;
noquit.match(qRegex); //["q"]
//Here is a simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/; // primero checkea que tenga entre 3 y 6 caracteres. Luego chequea que haya caracteres no nros y despues 1 nro.
checkPass.test(password);

// Capture groups /(\w+)/  match a word that occurs multiple times.  \1  The substring matched by the group
let repeatStr = "row row row your boat";
repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]