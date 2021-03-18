import { appData } from './model.js'


// Helpers
export function addTodo(todo) {
    
    let id = appData.addTask(todo, false)

    presentTodo(id, todo, false);
    
}

export function presentAll () {
    for (let ar in appData.data) {
        console.log(appData.data[ar]);
        presentTodo(ar, appData.data[ar][0],appData.data[ar][1])
    }
}

function presentTodo(id, todo, done) {
    
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    if (done) li.style.textDecoration = 'line-through red'
    li.id = id;
    li.classList.add('todo-list-item');
    
    let box = ul.parentNode
    box.classList.remove('todo-list-empty')
    ul.appendChild(li);
} 

export function checkTodo(e) {
    let item = e.target.parentNode;
    let id = item.id;

    if (item.style.textDecoration == 'line-through red') {
        item.style.textDecoration = 'none';
        appData.done(id, false)
    
    } else {
        item.style.textDecoration = 'line-through red';
        appData.done(id, true)
    }
}

export function deleteTodo(e) {
    let item = e.target.parentNode;
    let box = item.parentNode.parentNode;
    let id = item.id;

    appData.deleteTask(id)
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');

    if (appData.data.length<1) box.classList.add('todo-list-empty')
}