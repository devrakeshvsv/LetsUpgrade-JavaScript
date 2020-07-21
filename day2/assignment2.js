// Array Methods
console.log('Array Methods -');

var array = ['JavaScript', 'Python', 'Django', 'HTML', 'CSS'];
console.log(`Length Method : %c${array.length}`, 'color:red');

console.log(
	`Map Method : %c${array.map((value) => {
		return value.toString().length;
	})}`,
	'color:red'
);

console.log(`Splice Method : %c${array.splice(2, 1)}`, 'color:red');

console.log(`Pop Method : %c${array.pop()}`, 'color:red');

console.log(`Push Method : %c${array.push('React.JS')}`, 'color:red');

console.log(`Fetch value through index : %c${array[2]}`, 'color:red');

// String Method
console.log('String Method -');

var string = 'Lets-Upgrade';

console.log(`Length Method : %c${string.length}`, 'color:red');

console.log(`Search Method : %c${string.search('U')}`, 'color:red');

console.log(`Substring Method : %c${string.substring(5, 12)}`, 'color:red');

console.log(`Substr Method : %c${string.substr(5)}`, 'color:red');

console.log(
	`Replace Method : %c${string.replace('Lets', 'Lets-Community')}`,
	'color:red'
);

console.log(`Concat Method : %c${string.concat(' Community')}`, 'color:red');

console.log(`Slice Method : %c${string.slice(5, 12)}`, 'color:red');

console.log(`CharCodeAt Method : %c${string.charCodeAt(2)}`, 'color:red');
