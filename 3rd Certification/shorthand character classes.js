//shorthand character classes
// \w. This shortcut is equal to [A-Za-z0-9_]
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length; //31

// \W (opposite of the \w) this shortcut is the same as [^A-Za-z0-9_]

quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
result = quoteSample.match(nonAlphabetRegex).length;

// \d This is equal to the character class [0-9].
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
result = movieName.match(numRegex).length;