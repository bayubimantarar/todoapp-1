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
