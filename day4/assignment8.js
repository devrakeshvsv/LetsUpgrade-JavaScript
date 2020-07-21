function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// Replacement of function expresstion to arrow function
ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
