var name = prompt("Enter your name...", "Anonymous");

setInterval(timeChanger, 1000);

function timeChanger() {
  document.querySelector(
    "#greet"
  ).innerHTML = `Welcome Dear ${name} to my website`;
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var postFix = "AM";
  if (hour > 12) {
    postFix = "PM";
    hour %= 12;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  document.querySelector(
    "#time"
  ).innerHTML = `${hour} : ${minute} : ${second} ${postFix}`;
}

function darkMode() {
  document.bgColor = "black";
  document.fgColor = "white";
  document.querySelector("#btn").setAttribute("onClick", "lightMode()");
  document.querySelector("#btn").setAttribute("value", "Light Mode");
}

function lightMode() {
  document.bgColor = "white";
  document.fgColor = "black";
  document.querySelector("#btn").setAttribute("onClick", "darkMode()");
  document.querySelector("#btn").setAttribute("value", "Dark Mode");
}
