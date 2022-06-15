// recursion (replace loop)
function multiply(arr, n) {
    if (n <= 0) { //This is the base case. tells the recursive function when it no longer needs to call itself, calling multiply again until n <= 0
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1]; // va multiplicando 1 a 1 los elementos del array. Igual que (product *= arr[i];)
      // multiply(arr, n - 1) devolveria [1, 2, 3] y multiplicaria por n-1 (seria tipo 3 * 7, 2 * 21, 42 * 1, 42 * 1. Return 42)
    }
}
multiply([1,2,3,7], 4)

/* instead of

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
*/

// Otro ejemplo de recursion porque no entendiste un pingo
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1); // la funcion recursiva guardando los n
      countArray.unshift(n); //after the recursive call has returned
      return countArray;  //[ 5, 4, 3, 2, 1 ]
    }
}

console.log(countdown(5));





