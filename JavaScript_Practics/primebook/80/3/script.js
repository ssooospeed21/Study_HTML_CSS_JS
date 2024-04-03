"use strict"
const rows = document.querySelectorAll('tr');
const data = [];
rows.forEach(row => {
    const [surname, name, patronymic] = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
    data.push({
        surname,
        name,
        patronymic
    });
});
const jsonData = JSON.stringify(data);
console.log(jsonData);