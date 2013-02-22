/*
Largest palindrome product
Problem 4

http://projecteuler.net/problem=4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function checkPalindrome(input) {
	var inputArray = input.split("").join("");
	var reverseInput = inputArray.split("").reverse().join("");
	if (reverseInput === inputArray) {
		return true;
	}
}

function getValues() {

	var myPal = "";
	var testPal = "";
	var prevMax = 0;

    for(var i=100;i<1000;i++){
		for(var j=100;j<1000;j++){
			testPal = (i*j).toString();
			if (checkPalindrome(testPal)) {
				if ((i*j) > prevMax) {
					myPal = testPal;
					prevMax = (i*j);
				}
			}
		}
	}
	return myPal;
} 

getValues();
