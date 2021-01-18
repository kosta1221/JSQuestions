"use strict";
/* Returns the sum of the cubes of the digits of a number */
function digitCubesSum(number) {
	let digitCubesSum = 0;
	for (let i = number; i > 0; i = Math.floor(i / 10)) {
		digitCubesSum += Math.pow(i % 10, 3);
	}
	return digitCubesSum;
}
/* Returns true if a number is an armstrong number and false otherwise */
function isArmstrong(number) {
	return digitCubesSum(number) == number;
}
/* Finds all the armstrong numbers in a specified range*/
function findArmstrongs(range) {
	for (let j = 0; j < range; j++) {
		if (isArmstrong(j)) {
			console.log(j + " is an Armstrong number.");
		}
	}
}
findArmstrongs(1000);
