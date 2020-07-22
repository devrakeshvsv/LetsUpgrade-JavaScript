var number = parseInt(prompt("Enter a number to print table..."));

var table = "";

for (var i = 1; i <= 10; i++) {
  table += `${number}&ensp;x&ensp;${i}&ensp;=&ensp;${number * i}<br>`;
}

document.querySelector("#table").innerHTML = table;
