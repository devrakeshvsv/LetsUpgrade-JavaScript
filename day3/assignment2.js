var userInput = prompt('Enter the OS name anv Version with space separated...');

var osNameVersionArray = userInput.split(' ');

console.log(
	`The OS name is %c${osNameVersionArray[0]} %cand Version is %c${osNameVersionArray[1]}`,
	`color:red`,
	`color:white`,
	`color:red`
);
