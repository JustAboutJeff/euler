/*
Problem 7
10001st prime

http://projecteuler.net/problem=7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?

*/

function findPrimeByIndex(index,buffer) {

    var sieve = []
    var i = 0;
    var j = 0;
    var primes = [];

    for (i = 2; i <= buffer; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i * 2; j <= buffer; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes[index-1];
}

findPrimeByIndex(10001,1000000);