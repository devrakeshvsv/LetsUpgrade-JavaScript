var limit = parseInt(prompt("Enter limit of series..."));

// Prime series array which is store the prime numbers
var primeSeries = [];

// Logic to find prime number
for (var i = 2; i <= limit; i++) {
  var prime = true;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    primeSeries.push(i);
  }
}

console.log(`Prime Series : %c${primeSeries.join(", ")}`, "color:red");
