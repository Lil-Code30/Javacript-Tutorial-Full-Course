const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.name')
    const name = inputElement.value

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}

const taskList = [];
function addTask(){
    const inputElement = document.querySelector('.todo')
    const task = inputElement.value

    taskList.push(task);

    let todoListHTML = '';
    for(let i = 0; i < taskList.length; i++){
        const todo = taskList[i];
        const html = `<p>${todo}</p>`;

        todoListHTML += html;
    }
    const container = document.querySelector('.container');

    container.innerHTML = todoListHTML;

    inputElement.value = '';
}