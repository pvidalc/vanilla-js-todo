import {addTodo, checkTodo, deleteTodo, deleteAll} from './helpers.js'


// Event Handlers
export function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

export function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

export function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
    deleteAll()
}
