"use strict";

let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

add.addEventListener('click', function () {
    let tr = document.createElement('tr');
    let nameCell = createCell(tr, name.value, 'name');
    let priceCell = createCell(tr, price.value, 'price');
    let amountCell = createCell(tr, amount.value, 'amount');
    let costCell = createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'удалить', 'remove');

    table.appendChild(tr);
    recountTotal();
});

function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value;

    if (name === 'remove') {
        td.classList.add('remove');
        td.addEventListener('click', function () {
            tr.remove();
            recountTotal();
        });
    } else {
        td.classList.add(name);
        if (name !== 'cost') {
            allowEdit(td);
        }
    }

    tr.appendChild(td);
    return td;
}

function recountTotal() {
    let costCells = document.querySelectorAll('.cost');
    let totalSum = 0;

    costCells.forEach(cell => {
        totalSum += parseFloat(cell.textContent);
    });

    total.textContent = totalSum.toFixed(2);
}

function allowEdit(td) {
    td.addEventListener('dblclick', function () {
        let text = td.textContent;
        td.textContent = '';

        let input = document.createElement('input');
        input.value = text;
        input.focus();
        td.appendChild(input);

        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                td.textContent = this.value;

                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let row = td.parentElement;
                    let price = parseFloat(row.querySelector('.price').textContent);
                    let amount = parseInt(row.querySelector('.amount').textContent);

                    if (!isNaN(price) && !isNaN(amount)) {
                        let costCell = row.querySelector('.cost');
                        let cost = price * amount;
                        costCell.textContent = cost.toFixed(2);
                        recountTotal();
                    }
                }
            }
        });
    });
}
