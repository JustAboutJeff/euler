/*
Problem 7
10001st prime

http://projecteuler.net/problem=7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?

*/

function Prime () {

	var primes = [2,3,5,7,11];
	var p = 13;

	this.solve = function(magicNumber) {
		while (primes.length < magicNumber) {
			// (Math.sqrt(p) >= 6p + 1) || (Math.sqrt(p) >= 6p - 1)
			if (p % 2 !== 0 && p % 3 !== 0 && p % 5 !== 0 && p % 7 !== 0 ) {
				primes.push(p);
			}
			p++;
		}
		return primes;
	}
		
}

var myPrime = new Prime();
myPrime.solve(100);