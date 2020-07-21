console.log('%cCalculator', 'color:yellow;font-weight:bold');
var operation = parseInt(
	prompt(
		'Enter Operation...\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Square root\n6.Percentage'
	)
);

switch (operation) {
	case 1: {
		var num1 = parseInt(prompt('Enter first number...'));
		var num2 = parseInt(prompt('Enter second number...'));
		console.log(
			`Addition %c${num1} + ${num2} = %c${num1 + num2}`,
			'color:red',
			'color:yellow'
		);
		break;
	}
	case 2: {
		var num1 = parseInt(prompt('Enter first number...'));
		var num2 = parseInt(prompt('Enter second number...'));
		console.log(
			`Subtraction %c${num1} - ${num2} = %c${num1 - num2}`,
			'color:red',
			'color:yellow'
		);
		break;
	}
	case 3: {
		var num1 = parseInt(prompt('Enter first number...'));
		var num2 = parseInt(prompt('Enter second number...'));
		console.log(
			`Multiplication %c${num1} * ${num2} = %c${num1 * num2}`,
			'color:red',
			'color:yellow'
		);
		break;
	}
	case 4: {
		var num1 = parseInt(prompt('Enter first number...'));
		var num2 = parseInt(prompt('Enter second number...'));
		console.log(
			`Division %c${num1} / ${num2} = %c${num1 / num2}`,
			'color:red',
			'color:yellow'
		);
		break;
	}
	case 5: {
		var num = parseInt(prompt('Enter first number...'));
		console.log(
			`Square root of %c${num} is %c${Math.sqrt(num).toFixed(3)}`,
			'color:red',
			'color:yellow'
		);
		break;
	}
	case 6: {
		var num1 = parseInt(prompt('Enter total marks...'));
		var num2 = parseInt(prompt('Enter obtained marks...'));
		console.log(
			`Percentage of %c${num1} % ${num2} = %c${(
				(num2 / num1) *
				100
			).toFixed(2)}%`,
			'color:red',
			'color:yellow'
		);
		break;
	}
	default: {
		alert('Invalid Choice!!');
	}
}
