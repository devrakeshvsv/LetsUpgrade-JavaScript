var marks = +prompt('Enter marks...');

// Using conditional statement
console.log(`%cUsing conditional statements`, `color:green`);
var grade;
if (marks > 80) {
	grade = 'A+';
} else if (marks > 60) {
	grade = 'A';
} else if (marks > 40) {
	grade = 'B';
} else if (marks > 33) {
	grade = 'C';
} else {
	grade = 'D';
}

console.log(
	`Marks are %c${marks} %cand Grade is %c${grade}`,
	`color:red`,
	`color:white`,
	`color:red`
);
