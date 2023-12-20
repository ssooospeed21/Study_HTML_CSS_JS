"use strict";
let input = document.getElementById('input');
let table = document.getElementById('table');

let events = [
    {year: 2000, date: '01.01.2000', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2000, date: '02.02.2000', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2001, date: '01.01.2001', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2001, date: '02.02.2001', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2002, date: '01.01.2002', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2002, date: '02.02.2002', name: 'Событие 6', description: 'Описание события 6'},
    {year: 2003, date: '01.01.2003', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2003, date: '02.02.2003', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2004, date: '01.01.2004', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2004, date: '02.02.2004', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2005, date: '01.01.2005', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2005, date: '02.02.2005', name: 'Событие 6', description: 'Описание события 6'},
    {year: 2006, date: '01.01.2006', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2006, date: '02.02.2006', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2007, date: '01.01.2007', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2007, date: '02.02.2007', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2008, date: '01.01.2008', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2008, date: '02.02.2008', name: 'Событие 6', description: 'Описание события 6'},
    {year: 2009, date: '01.01.2009', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2009, date: '02.02.2009', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2010, date: '01.01.2010', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2010, date: '02.02.2010', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2011, date: '01.01.2011', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2011, date: '02.02.2011', name: 'Событие 6', description: 'Описание события 6'},
];

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let year = input.value;
        let yearEvents = events.filter(event => event.year == year);
        if (yearEvents.length > 0) {
            table.innerHTML = '';
            for (let event of yearEvents) {
                let row = document.createElement('tr');
                row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
                table.appendChild(row);
            }
        } else {
            alert('Нет событий для этого года');
        }
    }
});

