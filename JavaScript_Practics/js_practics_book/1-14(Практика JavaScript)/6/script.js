"use strict";
let date = new Date();
let daysElement = document.getElementById('days');
let monthAndYearElement = document.getElementById('monthAndYear');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

function updateCalendar() {
    daysElement.innerHTML = '';
    let month = date.getMonth();
    let year = date.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        if (new Date().toDateString() === new Date(year, month, i).toDateString()) {
            li.classList.add('today');
        }
        daysElement.appendChild(li);
    }
    monthAndYearElement.textContent = date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });
}

prevButton.addEventListener('click', function() {
    date.setMonth(date.getMonth() - 1);
    updateCalendar();
});

nextButton.addEventListener('click', function() {
    date.setMonth(date.getMonth() + 1);
    updateCalendar();
});

updateCalendar();
