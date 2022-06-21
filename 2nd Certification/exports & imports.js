//A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.
//<script type="module" src="filename.js"></script>

//export

const add = (x, y) => { // variable add que toma dos valores y los suma
    return x + y;
}

export { add };

//export default
export default function add(x, y) { //named function
    return x + y;
}

export default function(x, y) { //anonymous function
    return x + y;
}

//import

import { add } from './math_functions.js';

import * as myMathModule from "./math_functions.js"; //import all of its contents into the current file. It will create an object called myMathModule
myMathModule.add(2, 3); //How you use it

//import default
import adds from "./math_functions.js"; //adds here is simply a variable name. You can use any name here when importing a default. Without the {} it will look for the default
adds(5, 7);