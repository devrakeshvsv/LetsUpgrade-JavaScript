var positiveNumber = parseInt(prompt("Enter a positive number"));
var numbers = [];
for (var i = 0; i < positiveNumber; i++) {
  numbers.push(parseInt(prompt("Enter Number in Array...")));
}
console.log(`Array of Numbers : %c${numbers}`, "color:red");

var oddNumbers = numbers.filter((element) => {
  return element % 2 != 0;
});
console.log(`Array of Filtered Odd Numbers : %c${oddNumbers}`, "color:red");

var oddNumbersCube = oddNumbers.map((element) => {
  return element ** 3;
});
console.log(
  `Array of Filtered Odd Numbers Cube : %c${oddNumbersCube}`,
  "color:red"
);
