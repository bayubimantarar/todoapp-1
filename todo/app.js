// Define UI Vars
const form = document.querySelector('#submit-form')
			todoInput = document.querySelector('#new-todo')
			todoList = document.querySelector('#todo-list')
			clearBtn = document.querySelector('.clear-btn')
			removeBtn = document.querySelector('.remove-btn')

// Load Event Listeners
form.addEventListener('submit', addTodo)
todoList.addEventListener('click', removeTodo)
clearBtn.addEventListener('click', clearTodo)

// Functions
function addTodo(e) {
	const li = document.createElement('li')
	const text = document.createTextNode(todoInput.value)
	const href = document.createElement('a')
	const x = document.createTextNode('X')

	if(todoInput.value != '') {
		href.setAttribute('href', '#')

		href.className = 'btn btn-sm btn-danger remove-btn'
		li.className = 'list-group-item d-flex justify-content-between align-items-center'

		href.appendChild(x)
		li.appendChild(text)
		li.appendChild(href)
		todoList.appendChild(li)

		todoInput.value = ''
		todoInput.focus()

	} else {
		alert('Please provide a todo!')
		todoInput.value = ''
		todoInput.focus()
	}

	e.preventDefault()
}

function removeTodo(e) {
	if(e.target.classList.contains('remove-btn')) {
		e.target.parentElement.remove()
	}
}

function clearTodo() {
	while(todoList.firstChild) {
		todoList.removeChild(todoList.firstChild)
	}
}

function statement() {
	var x, y, z;
	x = 5;
	y = 6;
	z = x + y;

	console.log('The value of z is: ' + z + '.');
}

function maths() {
	let x = 10.5;
	let y = 15.0;
	let z = -5;

	console.log('Math.round returns the value of x rounded to its nearest integer: ' + Math.round(x));
	console.log('Math.pow returns the value of x to the power of y: ' + Math.pow(x, y));
	console.log('Math.sqrt returns the square root of x: ' + Math.sqrt(y));
	console.log('Math.abs returns the absolute (positive) value of x: ' + Math.sqrt(z));
}