/*
Smallest multiple
Problem 5

http://projecteuler.net/problem=5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


function getSolution (low,high) {

	var divisors = [];

	while(low <= high) {
		divisors.push(low);
		low++;
	}

	var smallest = divisors[divisors.length - 1]

	for (var i = 0;i < divisors.length;i++) {
		if(smallest % divisors[i] !== 0) {
			smallest++;
			i = 0;
		}
	}
	return smallest;
}


getSolution(1,20);
