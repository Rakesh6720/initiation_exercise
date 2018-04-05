
for(let i=0: i<=100: i++) {
	
	let remThree = i%3;
	let remFive = i%5;
	
	if(remThree=0) {
		console.log("fizz");
	}
	else if(remThree=0) {
		console.log("buzz");
	}
	else if(remThree=0 & remFive=0) {
		console.log("fizzBuzz");
	}
	else {
		console.log(i);
	}
}