"use strict"
let table = document.querySelector('#todo');
let counter = 0;
if (!localStorage.getItem('todoi')) {
    localStorage.setItem('todoi', String(counter));
} else {
    counter = Number(localStorage.getItem('todoi'));
}
let todoList = [];
if (!localStorage.getItem('todolist')) {
    localStorage.setItem('todolist', JSON.stringify(todoList));
} else {
    todoList = JSON.parse(localStorage.getItem('todolist'));
    for (const todoListElement of todoList) {
        table.innerHTML += `
        <tr id="todo${todoListElement.id}">
            <td>
                <button onclick="del(this)">Удалить</button>
                <input id="todo-text${todoListElement.id}" onblur="updateText(this)" type="text">
                <input id="todo-ischeked${todoListElement.id}" type="checkbox" onclick="ischeked(this)">
            </td>
        </tr>`;
        setTimeout(function() {
            let input = document.querySelector('#todo-text' + todoListElement.id);
            input.value = todoListElement.text;
            let checkbox = document.querySelector('#todo-ischeked' + todoListElement.id);
            checkbox.checked = todoListElement.ischeked;
        }, 0);
    }
}


function set() {
    let table = document.querySelector('#todo');
    let tr = document.createElement('tr');
    tr.id = "todo" + counter;

    let td = document.createElement('td');

    let delButton = document.createElement('button');
    delButton.onclick = function() { del(this); };
    delButton.textContent = "Удалить";
    td.appendChild(delButton);

    let inputText = document.createElement('input');
    inputText.id = "todo-text" + counter;
    inputText.onblur = function() { updateText(this); };
    inputText.type = "text";
    td.appendChild(inputText);

    let inputCheckbox = document.createElement('input');
    inputCheckbox.id = "todo-ischeked" + counter;
    inputCheckbox.type = "checkbox";
    inputCheckbox.onclick = function() { ischeked(this); };
    td.appendChild(inputCheckbox);

    tr.appendChild(td);
    table.appendChild(tr);

    counter++;
    localStorage.setItem('todoi', String(counter));
    todoList.push({
        id: counter,
        text: '',
        ischeked: false,
    });
    localStorage.setItem('todolist', JSON.stringify(todoList));
}


function del(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    todoList = JSON.parse(localStorage.getItem('todolist'));
    let id = parseInt(row.id.replace('todo', ''));
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            todoList.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('todolist', JSON.stringify(todoList));
    row.parentNode.removeChild(row);
}

function updateText(input) {
    todoList = JSON.parse(localStorage.getItem('todolist'));
    let id = parseInt(input.id.replace('todo-text', ''));
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            todoList[i].text = input.value;
            break;
        }
    }
    localStorage.setItem('todolist', JSON.stringify(todoList));
}


function ischeked(checkbox) {
    todoList = JSON.parse(localStorage.getItem('todolist'));
    let id = parseInt(checkbox.id.replace('todo-ischeked', ''));
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            todoList[i].ischeked = checkbox.checked;
            break;
        }
    }
    localStorage.setItem('todolist', JSON.stringify(todoList));
}