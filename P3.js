/*
Largest prime factor
Problem 3

http://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var solution = [];

function getFactors(value) {
	var i = 0;
	var myFactors = [];
	while(i <= value){
		if (value%i === 0) {
			myFactors.push(i);
		}
		i++;
	}
	return myFactors;
};

function isPrime(value) {
	var divisors = 0;
	for (var i=0;i<=value;i++) {
		if (value%i === 0) {
			divisors++;
		}
	}
	if (divisors <= 2) {
		return true;
	} else {
		return false;
	}
};

function getPrimeFactors(myArray) {
		return myArray.filter(isPrime);
}


solution = getPrimeFactors(getFactors(600)); //600851475143


solution.sort(function(a,b){
	return a-b;
});

solution.reverse();

console.log(solution[0]);
