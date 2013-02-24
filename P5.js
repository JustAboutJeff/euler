/*
Smallest multiple
Problem 5

http://projecteuler.net/problem=5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function getSolution (low,high) {

	var small = high * low;

	while(low <= high) {
		while(small % low != 0){
			small++;
		}
		low++;
	}
	
	return small;

}

getSolution(1,20);




