var array = ["red", "green", "blue", "violet", "gray", "black"];

setInterval(changeColor, 5000);
function changeColor() {
  var color = array.shift();
  document.bgColor = color;
  array.push(color);
  document.querySelector('h2').style.color = 'white'
}