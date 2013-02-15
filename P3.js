/*
Largest prime factor
Problem 3

http://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// The object 'solution' has the property 'primeFactors' which will ultimately contains a list of prime factors for
// the parameter 'value' passed to the method 'getPrimeFactors'

var solution = {};

solution.primeFactors = [];

solution.getPrimeFactors = function(value) {
	var i = 0;
	while(i <= value){
		if (value%i === 0) {
			solution.primeFactors.push(i);
		}
		i++;
	}
};


solution.getPrimeFactors(600) //600851475143
solution.primeFactors.sort();
solution.primeFactors.reverse();

console.log(solution.primeFactors[0]);