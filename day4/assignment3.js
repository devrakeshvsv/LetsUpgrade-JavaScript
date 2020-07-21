var shoppingList = ['Apple', 'Soap', 'Biscuit', 'Cold Drink'];

var shoppingBasket = [...shoppingList];

console.log(`shoppingList -> %c${shoppingList}`, 'color:red');
console.log(`shoppingList -> %c${shoppingBasket}`, 'color:red');

// for inserting something new things in shoppingBasket
var limit = parseInt(
	prompt('How many item you want to enter in shoppingBasket...')
);
for (var i = 1; i <= limit; i++) {
	shoppingBasket.push(prompt('Insert Item...'));
}

console.log('%cAfter Inserting something in shoppingBasket2', 'color:yellow');
console.log(`shoppingList -> %c${shoppingList}`, 'color:red');
console.log(`shoppingList -> %c${shoppingBasket}`, 'color:red');
