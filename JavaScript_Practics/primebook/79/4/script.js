"use strict"
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let employees = JSON.parse(json);
const table = document.createElement('table');
const headerRow = table.insertRow();
Object.keys(employees[0]).forEach(key => {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
});
employees.forEach(employee => {
    const row = table.insertRow();
    Object.values(employee).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
    });
});
document.body.appendChild(table);

