console.clear(); // it will clear the console

console.log('console.log() --> debug or print something on console.');

console.error('console.error() --> This is an error by using console.error()');

console.warn('console.warn() --> This is a warning by using console.warn()');

console.table({
	firstName: 'Rakesh',
	lastName: 'Vishwakarma',
	address: 'Kannod',
});

console.time('abc');
let fun = function () {
	console.log('fun is running');
};
let fun2 = function () {
	console.log('fun2 is running..');
};
fun();
fun2();
console.timeEnd('abc');

for (var i = 0; i < 5; i++) {
	console.count(i);
}

console.group('simple');
console.warn('warning!');
console.error('error here');
console.log('vivi vini vici');
console.groupEnd('simple');
console.log('new section');
