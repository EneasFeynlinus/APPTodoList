const formAddTodo = document.querySelector('.form-add-todo')
const containerTodos = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if (inputValue.length) {
        containerTodos.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todos="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
        `
    }
    event.target.reset()
}


const removeTodo = event => {
    const trashWasClicked = event.target.dataset.trash

    if (trashWasClicked) {
        const todo = document.querySelector(`[data-todos="${trashWasClicked}"]`)
        todo.remove()
    }
}


const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    })
}

const hideTodos = (todos, inputValue) => {
    const todosToHide = filterTodos(todos, inputValue, false)
    manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todosToShow, 'd-flex', 'hidden')
}

const searchTodo = event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(containerTodos.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
}

containerTodos.addEventListener('click', removeTodo)
formAddTodo.addEventListener('submit', addTodo)
inputSearchTodo.addEventListener('input', searchTodo)