"use strict";
/* Returns the divisors of an integer as an array of integers, from largest to smallest */
function getDivisorsLargestToSmallest(int1) {
	let divisors = [];
	for (let i = int1; i > 0; i--) {
		if (int1 % i === 0) divisors.push(i);
	}
	return divisors;
}
/* Returns the GCD of two positive integers */
function getGCD(int1, int2) {
	let divisorsInt1 = getDivisorsLargestToSmallest(int1).slice();
	let divisorsInt2 = getDivisorsLargestToSmallest(int2).slice();
	for (let i = 0; i < divisorsInt1.length; i++) {
		for (let j = 0; j < divisorsInt2.length; j++) {
			if (divisorsInt1[i] === divisorsInt2[j]) {
				return divisorsInt1[i];
			}
		}
	}
}
console.log("The divisors of 666 are :");
console.log(getDivisorsLargestToSmallest(666));
console.log("The divisors of 444 are :");
console.log(getDivisorsLargestToSmallest(444));
console.log("Their GCD is: ");
console.log(getGCD(666, 444));
