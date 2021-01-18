let num1, num2, num3, num4, num5;
let largestNum;
num1 = prompt("Input the first number", "0");
num2 = prompt("Input the second number", "0");
num3 = prompt("Input the third number", "0");
num4 = prompt("Input the fourth number", "0");
num5 = prompt("Input the fifth number", "0");
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
	largestNum = num1;
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
	largestNum = num2;
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
	largestNum = num3;
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
	largestNum = num4;
} else largestNum = num5;
alert("The largest number is " + largestNum);
