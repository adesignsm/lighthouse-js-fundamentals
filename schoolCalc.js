function schoolCalc(age) {

	if (age < 13) {

		console.log("Youre going to elementary school");
	
	} else if (age > 13 && age < 18) {

		console.log("Youre going to secondary school");
	
	} else {

		console.log("LIGHTHOUSE LABS");
	}
}

console.log("I am 10.");
console.log(schoolCalc(10));

console.log("Iam 15.");
console.log(schoolCalc(15));

console.log("Iam 19.");
console.log(schoolCalc(19));