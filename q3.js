let num1, num2, num3;
let result = [];
num1 = prompt("Input the first number", "0");
num2 = prompt("Input the second number", "0");
num3 = prompt("Input the third number", "0");
if (num1 <= num2 && num1 <= num3) {
	result[0] = num1;
	if (num2 <= num3) {
		result[1] = num2;
		result[2] = num3;
	} else {
		result[1] = num3;
		result[2] = num2;
	}
} else if (num2 <= num1 && num2 <= num3) {
	result[0] = num2;
	if (num1 <= num3) {
		result[1] = num1;
		result[2] = num3;
	} else {
		result[1] = num3;
		result[2] = num1;
	}
} else {
	result[0] = num3;
	if (num1 <= num2) {
		result[1] = num1;
		result[2] = num2;
	} else {
		result[1] = num2;
		result[2] = num1;
	}
}
alert(result);
