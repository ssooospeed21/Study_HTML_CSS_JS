"use strict";
let countries = ['Belarus', 'Belgium', 'Bulgaria'];

let input = document.getElementById('elem');
let list = document.getElementById('list');

input.addEventListener('input', function(event) {
    let inputValue = event.target.value.toLowerCase();

    let filteredCountries = countries.filter(country =>
        country.toLowerCase().startsWith(inputValue)
    );
        filteredCountries.forEach(country => {
        let listItem = document.createElement('li');
        listItem.textContent = country;

        listItem.addEventListener('click', function() {
            input.value = country;
            list.style.display = 'none';
        });

        list.appendChild(listItem);
    });

    list.style.display = filteredCountries.length > 0 && inputValue.length > 0 ? 'block' : 'none';
});