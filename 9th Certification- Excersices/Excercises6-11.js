/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    const regex = /^[^aeiou]+/;
    let consonants = str.match(regex);

    return consonants !== null ? // si es falso significa que empieza con vocal
        str // En caso de ser verdadero
        .replace(regex, "")
        .concat(consonants)
        .concat("ay") : str.concat("way"); // En caso de ser falso (despues de : )
}

console.log(translatePigLatin("consonant"));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
    let second = after.toLowerCase();

    if (before.match(/^[A-Z]/)) { //Note: Preserve the case of the first character in the original word when you are replacing it. 
        second = after.charAt(0).toUpperCase() + after.slice(1);
    }

    return str.split(" ")
        .map(word => word.replace(before, second))
        .join(" ");

}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "fitting"));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    const arr = [
        ["T", "A"],
        ["C", "G"],
        ["G", "C"],
        ["A", "T"]
    ];
    let newArr = [];
    for (let i = 0; i < str.match(/\w/g).length; i++) {
        arr.map(char => {
            if (str.charAt(i) === char[0]) {
                newArr.push(char);
            }

        });
    }
    return newArr;
}

console.log(pairElement("ATCGA"));
// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let num = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (num !== str.charCodeAt(i)) {
            return String.fromCharCode(num);
        }
        num++;
    }
    return undefined;
}

console.log(fearNotLetter("abce"));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arr) {
    return arr
        .flat() // crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
        .filter((val, index, arr) => {
            return arr.indexOf(val) === index; // filtra por valores unicos, devuelve el indice de la primera vez que aparece el valor, si es la primera vez que aparece lo devuelve.
        });
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// ***********************************************************
// ***********************************************************
// ***********************************************************