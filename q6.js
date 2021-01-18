"use strict";
let grades = [80, 77, 88, 95, 68];
let gradeAvg = 0;
for (let i = 0; i < grades.length; i++) {
	gradeAvg += grades[i];
}
gradeAvg /= grades.length;
console.log("Average grade: " + gradeAvg);
if (gradeAvg < 60) {
	console.log("Grade : F");
} else if (gradeAvg < 70) {
	console.log("Grade : D");
} else if (gradeAvg < 80) {
	console.log("Grade : C");
} else if (gradeAvg < 90) {
	console.log("Grade : B");
} else if (gradeAvg < 100) {
	console.log("Grade : A");
}
