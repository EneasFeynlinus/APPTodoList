const formAddTodo = document.querySelector('.form-add-todo')
const containerTodos = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()

    if (inputValue.length) {
        containerTodos.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
        `
    }
    formAddTodo.reset()
})

containerTodos.addEventListener('click', event => {
    const clickedElement = event.target.classList
    console.log(clickedElement)
})
