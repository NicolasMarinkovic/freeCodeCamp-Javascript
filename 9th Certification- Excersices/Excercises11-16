/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let fibo1 = 0;
    let fibo2 = 1;
    let result = 0;

    function fibonacci() {
        fibo2 += fibo1;
        fibo1 = fibo2 - fibo1;
    }

    while (fibo2 <= num) {
        if (fibo2 % 2 !== 0) {
            result += fibo2;
        }
        fibonacci();
    }

    return result;
}

console.log(sumFibs(1000));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    let sieve = [],
        i, j = [],
        primes = 0;
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes += i;
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

console.log(sumPrimes(10));

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    let numbers = [];

    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = arr[0]; i <= arr[1]; i++) {
        numbers.push(i);
    }

    for (let i = 1; true; i++) {
        let divisor = arr[1] * i;

        if (numbers.every((number) => divisor % number == 0)) {
            return divisor;
        }
    }
}

smallestCommons([1, 5]);

// ***********************************************************
// ***********************************************************
// ***********************************************************

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    while (!func(arr[0]) && arr.length > 0) {
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }));

// ***********************************************************
// ***********************************************************
// ***********************************************************