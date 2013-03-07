/*
Problem 7
10001st prime

http://projecteuler.net/problem=7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?

*/

function getPrime (magicNumber) {

	var myPrimes = [2,3];
	var index = 0;

	this.solve = function() {
		while (magicNumber--) {
			myPrimes.push(myPrimes[function(a,b) {
				return a + b;
			});
		}
		return myPrimes.pop();
	}
}

var mySolution = new getPrime(6);
mySolution.solve();