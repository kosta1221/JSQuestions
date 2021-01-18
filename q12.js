"use strict";
/* Returns the sum of the multiples of 3 or 5 up to and excluding the range parameter */
function sumOfMultiplesOfThreeOrFiveUpTo(range) {
	let sum = 0;
	for (let i = 0; i < range; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}
console.log(
	"The number of multiples of 3 or 5 up to 1000 is: " + sumOfMultiplesOfThreeOrFiveUpTo(1000)
);
