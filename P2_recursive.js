/*
Even Fibonacci numbers
Problem 2

http://projecteuler.net/problem=2

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million,
find the sum of the even-valued terms.

1, 1, 2, 3, 5, 8, 13
*/

var fibArray = [];
var evenFibArray = [];
var solutionIndex = 0;
var solution = 0;

// The recursive function 'fib' takes the parameter 'index'. Our base case occurs when 'index' is less than 2
// and is returned. Otherwise, the function will recursively call to itself using decremented parameters 
// of (index-1) and (index-2) and ultimatly return the integer located at that index within the fibonacci sequence

function fib(index) {
	if (index < 2) {
		return index;
	}
		return (fib(index-1) + fib(index-2));
}
//The function 'fibSeries' 

function fibSeries(index) {
	var myArray = [];
	for (var i=0;i<=index;i++){
		myArray.push(fib(i));
	}
	return myArray;
}

function getSolutionIndex(value){
	var i = 0;
	while (fib(i) < value){
		i++;
	}
	return i;
}

function isEven(value) {
	return (value%2 === 0);
}

function getEvens(myArray) {
	return myArray.filter(isEven);
}

function getSum(myArray) {
	return myArray.reduce(function(a,b){
			return a+b;
	});
}

solutionIndex = getSolutionIndex(4000000);
fibArray = fibSeries(solutionIndex);
evenFibArray = getEvens(fibArray);
solution = getSum(evenFibArray);

console.log(solution);


