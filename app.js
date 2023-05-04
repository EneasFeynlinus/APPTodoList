const formAddTodo = document.querySelector('.form-add-todo')
const containerTodos = document.querySelector('.todos-container')
const formSearchTodo = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
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
    formAddTodo.reset()
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

formSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(containerTodos.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

    Array.from(containerTodos.children)
        .filter(todo => todo.textContent.trim().toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})

