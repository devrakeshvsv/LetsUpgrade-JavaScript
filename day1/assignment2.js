// var keyword explaination
document.write(
	'<strong>var keyword</strong> :<br>When we create a variable with the help of var keyword it have functional scope and we can reassign it any other value.'
);

// var keyword code
var abc = 20;
document.write(`<br>Before calling function var variable : ${abc}`);
function func() {
	abc = 30;
	document.write(`<br>Under the function var variable : ${abc}`);
}
func();
document.write(`<br>Out of the function var variable : ${abc}`);

// let keyword explaination
document.write(
	'<br><br><strong>let keyword</strong> :<br>When we create a variable with the help of let keyword it have block level scope and we can reassign it any other value.'
);

// let keyword code
let xyz = 20;
document.write(`<br>Before calling function let variable : ${xyz}`);
function func() {
	let xyz = 30;
	document.write(`<br>Under the function let variable : ${xyz}`);
}
func();
document.write(`<br>Out of the function let variable : ${xyz}`);

// const keyword explaination
document.write(
	'<br><br><strong>const keyword</strong> :<br>When we create a variable with the help of const keyword it have block level scope and we can not reassign it any other value.'
);

// const keyword code
const def = 20;
document.write(`<br>Before calling function const variable : ${def}`);
function func() {
	const def = 30;
	document.write(`<br>Under the function const variable : ${def}`);
}
func();
document.write(`<br>Out of the function const variable : ${def}`);
