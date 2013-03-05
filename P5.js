/*
Smallest multiple
Problem 5

http://projecteuler.net/problem=5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


function getSolution (low,high) {

	var divisors = [];
	var i = 0;

	while(low <= high) {
		divisors.push(low);
		low++;
	}

	console.log('Divisors are: ' + divisors);

	var small = divisors[divisors.length - 1]

	console.log('Small before loop is: ' + small);

	while (i <= divisors.length) {
		if((small % divisors[i]) === 0) {
			i++;
		} else {
			small++;
			i = 0;
		}
	}

	console.log('Small after loop is: ' + small);
	return small;
}


getSolution(1,4);
