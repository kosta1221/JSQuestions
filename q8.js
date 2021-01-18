"use strict";
/* Returns the sum of the squares of the digits of a number */
function digitSquaresSum(number) {
	let digitSquaresSum = 0;
	for (let i = number; i > 0; i = Math.floor(i / 10)) {
		digitSquaresSum += Math.pow(i % 10, 2);
	}
	return digitSquaresSum;
}
/* Returns true if a number is happy and false otherwise */
function isHappy(number) {
	let arr = [];
	while (number !== 1 && arr[number] !== true) {
		arr[number] = true;
		number = digitSquaresSum(number);
	}
	return number === 1;
}

for (let i = 0, j = 1; i < 5; j++) {
	if (isHappy(j)) {
		console.log(j);
		i++;
	} else if (j > 9999) break;
}
