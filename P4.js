/*
Largest palindrome product
Problem 4

http://projecteuler.net/problem=4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function getPalindrome() {

	var val1 = 0;
	var val2 = 0;
	var myPal = 0;

	while (i <= value) {
		if (value%i === 0) {
			currentMaxFactor = i;
			value /= i;
		}
		i++;
	}

	function reverse(s){
    	return s.split("").reverse().join("");
	}

	return myPal;
};

getPalindrome();