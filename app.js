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

const searchTodo = event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(containerTodos.children).map(todo => ({
        todo,
        shouldBeVisible: todo.textContent.toLowerCase().includes(inputValue)
    }))

    todos.forEach(({ todo, shouldBeVisible }) => {
        todo.classList.add(shouldBeVisible ? 'd-flex' : 'hidden')
        todo.classList.remove(shouldBeVisible ? 'hidden' : 'd-flex')
    })
}

const clockContainer = document.querySelector('.clock-container')

const clockUpdate = () => {
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const seconds = time.getSeconds()

    const insertClock = `
    <span>${String(hour).length === 1 ? `0${hour}` : hour}</span> :
    <span>${String(minute).length === 1 ? `0${minute}` : minute}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    `
    clockContainer.innerHTML = insertClock
}

setInterval(clockUpdate, 1000)

containerTodos.addEventListener('click', removeTodo)
formAddTodo.addEventListener('submit', addTodo)
inputSearchTodo.addEventListener('input', searchTodo)