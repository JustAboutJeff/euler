/*

Problem 1

http://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

*/

// The function 'solution' takes the parameter 'limit' and cycles through a for loop which adds any multiple of 3 or 5
// to  the local variable 'mySum' until the for loop incrementer 'i' reaches 'limit -1'

function solution(limit) {

	var mySum = 0;

	for(var i=0;i<limit;i++){
		if(i%3 === 0){
			mySum += i;
		} else if(i%5 === 0){
			mySum +=i;
		}
	}

	return mySum;
}

console.log(solution(1000));
