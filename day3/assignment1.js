var number = parseInt(prompt('Enter a number...'));

function evenOdd(number) {
	var result = number % 2 == 0 ? 'EVEN' : 'ODD';
	return result;
}

console.log(
	`The number entered %c${number} %cand Number is %c${evenOdd(number)}`,
	`color:red`,
	`color:white`,
	`color:red`
);
