/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

// String.charCodeAt  String.fromCharCode

function rot13(str) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    let letterCode = str.charCodeAt(i);
      if (letterCode > 64 && letterCode < 91) {
        letterCode += 13;
        if (letterCode > 90) {
          let resto = letterCode - 90;
          letterCode = resto + 64;
        }
      }
    newStr.push(String.fromCharCode(letterCode));
  }
  return newStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));