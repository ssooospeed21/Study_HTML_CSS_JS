"use strict"
let users = [
    {
        surn: 'surn1',
        name: 'name1',
        age: 31,
    },
    {
        surn: 'surn2',
        name: 'name2',
        age: 32,
    },
    {
        surn: 'surn',
        name: 'name3',
        age: 33,
    },
];
localStorage.setItem('users', JSON.stringify(users));

function applyuser() {
    let surname = document.querySelector('#surname').value;
    let namee = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    users = JSON.parse(localStorage.getItem('users'));
    users.push({
        surn: String(surname),
        name: String(namee),
        age: String(age)
    });
    localStorage.setItem('users', JSON.stringify(users));
}