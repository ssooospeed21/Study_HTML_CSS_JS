"use strict"
let json = '["user1","user2","user3","user4","user5"]';
let users = JSON.parse(json);
const ul = document.createElement('ul');
users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    ul.appendChild(li);
});
document.body.appendChild(ul);
