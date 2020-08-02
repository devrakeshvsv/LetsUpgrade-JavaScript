// Define UI vars
const form = document.querySelector('#todo-form');
const toDoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-todos');
const toDoInput = document.querySelector('#todo');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	// DOM load event
	document.addEventListener('DOMContentLoaded', getToDo);
	// Add to do event
	form.addEventListener('submit', addToDo);
	// Remove to do event
	toDoList.addEventListener('click', removeToDo);
	// Clear to do event
	clearBtn.addEventListener('click', clearToDo);
}

// Get to do's from LS
function getToDo() {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todos.forEach(function (todo) {
		// Create li element
		const li = document.createElement('li');
		// Add a class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(todo));
		// Create new link element
		const link = document.createElement('a');
		// Add class
		link.className = 'delete-item secondary-content';
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li
		li.appendChild(link);
		// Append li to ul
		toDoList.appendChild(li);
	});
}

// Add to do
function addToDo(e) {
	if (toDoInput.value === '') {
		alert('Add a To Do!!');
		return;
	}
	// Create li element
	const li = document.createElement('li');
	// Add a class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(toDoInput.value));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);
	// Append li to ul
	toDoList.appendChild(li);
	// Store in LS
	storeToDoInLocalStorage(toDoInput.value);
	// Clear input
	toDoInput.value = '';
	e.preventDefault();
}

// Store to do in LS
function storeToDoInLocalStorage(todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todos.push(todo);

	localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove to do
function removeToDo(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You Sure Remove?'))
			console.log(e.target.parentElement.parentElement.remove());
	}
	e.preventDefault();

	removeToDoFromLocalStorage(e.target.parentElement.parentElement);
}

// Remove to do From Local Storage
function removeToDoFromLocalStorage(toDoItem) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach((todo, index) => {
		if (toDoItem.textContent === todo) {
			todos.splice(index, 1);
		}
	});

	localStorage.setItem('todos', JSON.stringify(todos));
}

// Clear to do
function clearToDo() {
	while (toDoList.firstChild) {
		toDoList.removeChild(toDoList.firstChild);
	}
	clearToDoFromLocalStorage();
}

// Clear to do From Local Storage
function clearToDoFromLocalStorage() {
	if (confirm('Are You Sure Clear To-Do')) {
		localStorage.clear();
	}
}
