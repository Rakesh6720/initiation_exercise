
for(let i=1; i<=100; i++) {
	let varFizz=3;
	let varBuzz=5;
	let remThree = i%varFizz;
	let remFive = i%varBuzz;
	
	if(remThree==0) {
		console.log("fizz");
	}
	else if(remFive==0) {
		console.log("buzz");
	}
	else if(remThree==0 & remFive==0) {
		console.log("fizzBuzz");
	}
	else {
		console.log(i);
	}
}