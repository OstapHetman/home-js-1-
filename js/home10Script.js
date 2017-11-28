// Get toDos from localstorage
function getTodos() {
    var todos = new Array,
        todosStr = localStorage.getItem('todo');

    if (todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}
// Add new Task
function add() {
    var task = document.getElementById('task').value,
        todos = getTodos();

    todos.push(task);
    document.getElementById('task').value = "";
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

// Remove Task
function remove() {
    var id = this.getAttribute('id'),
        todos = getTodos();

    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

// Show tasks
function show() {
    let todos = getTodos();
    var orderList = document.getElementById('todos'),
        btnRemove = document.getElementsByClassName('remove'),
        all = "";

    for (let i = 0; i < todos.length; i++) {
        all += '<li>' + todos[i] + '<button class="btn btn-outline-danger remove" id="' + i + '">remove</button></li>';
    };

    orderList.innerHTML = all;

    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);

show();