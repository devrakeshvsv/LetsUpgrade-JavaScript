var sales = parseInt(prompt('Enter Sales...'));

if (0 < sales <= 5000) {
	console.log(
		`The total commission earned by employee is %cRs. ${(
			(sales / 100) *
			2
		).toFixed(2)}`,
		'color:red'
	);
} else if (sales <= 10000) {
	console.log(
		`The total commission earned by employee is %cRs. ${(
			(sales / 100) *
			5
		).toFixed(2)}`,
		'color:red'
	);
} else if (sales <= 20000) {
	console.log(
		`The total commission earned by employee is %cRs. ${(
			(sales / 100) *
			7
		).toFixed(2)}`,
		'color:red'
	);
} else {
	console.log(
		`The total commission earned by employee is %cRs. ${(
			(sales / 100) *
			10
		).toFixed(2)}`,
		'color:red'
	);
}
