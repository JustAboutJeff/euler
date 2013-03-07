/*
Sum square difference
Problem 6

http://projecteuler.net/problem=6

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function SumSquareDiff (magicNumber) {
	var naturals = [];
	var mySquare = 0;
	var mySum = 0;
	this.getNaturals = function() {
		var i = magicNumber;
		while(i--) {
			naturals.push(i);
		}
	}
	this.getSum = function() {
		var j = magicNumber;
		while(j--) {
			mySum += Math.pow(naturals[j],2);
		}
	}
	this.getSquare = function() {
		var k = magicNumber;
		while(k--) {
			mySquare += naturals[k];
		}
		mySquare = Math.pow(mySquare,2);
	}
	this.solve = function() {
		return (mySquare - mySum);
	}
}


var mySolution = new SumSquareDiff(100);
mySolution.getNaturals();
mySolution.getSum();
mySolution.getSquare();
mySolution.solve();