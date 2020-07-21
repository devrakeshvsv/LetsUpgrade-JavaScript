const student = {
	name: 'Helsinki',
	age: 24,
	project: {
		diceGame: 'Two player dice game using JavaScript',
	},
};

// Destructuring of object
console.log('%cDestructuring of object', 'color:yellow');
const {
	name,
	age,
	project: { diceGame },
} = student;

console.log(student);
console.log(name);
console.log(age);
console.log(diceGame);
