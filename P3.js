/*
Largest prime factor
Problem 3

http://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function getFactor(value) {

	var i = 2;
	var currentMaxFactor = 0;

	while (i <= value) {
		if (value%i === 0) {
			currentMaxFactor = i;
			value /= i;
		}
		i++;
	}
	return currentMaxFactor;
};

getFactor(600851475143); //600851475143


