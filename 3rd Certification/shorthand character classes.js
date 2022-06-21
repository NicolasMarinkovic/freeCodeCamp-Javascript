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
result = movieName.match(numRegex).length; //4

// \D This is equal to the character class [^0-9].

movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
result = movieName.match(noNumRegex).length; //17

// \s  search for whitespace(espacio) carriage return, tab, form feed, and new line characters.  similar to the character class [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); //[" ", " "]

// \S Search for non-whitespace. similar to the character class [^ \r\t\f\n\v]
whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; //32