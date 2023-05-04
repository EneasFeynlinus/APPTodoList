const formAddTodo = document.querySelector('.form-add-todo')
const containerTodos = document.querySelector('.todos-container')
const formSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => {
    if (inputValue.length) {
        containerTodos.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todos="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
        `
        event.target.reset()
    }
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    addTodo(inputValue)
})

const removeTodo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todos="${trashDataValue}"]`)

    if (trashDataValue) {
        todo.remove()
    }
}

containerTodos.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const hideTodos = (todos, inputValue) => {
    filterTodos(todos, inputValue, false)
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
}

const showTodos = (todos, inputValue) => {
    filterTodos(todos, inputValue, true)
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
}

formSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(containerTodos.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})

