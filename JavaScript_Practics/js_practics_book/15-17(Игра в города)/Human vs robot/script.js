"use strict"
let input = document.getElementById('input');
let submitButton = document.getElementById('submit');
let messageDiv = document.getElementById('message');

let cities = [];
let allCities = ['Архангельск', 'Астана', "Москва"];
let lastLetter = '';

submitButton.addEventListener('click', function() {
    let city = input.value;
    input.value = '';
    if (cities.length > 0) {
        if (city[0].toLowerCase() !== lastLetter) {
            messageDiv.textContent = 'Первая буква города должна совпадать с последней буквой предыдущего города!';
            return;
        }
        if (cities.includes(city)) {
            messageDiv.textContent = 'Этот город уже был!';
            return;
        }
        if (!allCities.includes(city)) {
            messageDiv.textContent = 'Этого города нет в списке!';
            return;
        }
    }
    cities.push(city);
    lastLetter = city[city.length - 1].toLowerCase();
    messageDiv.textContent = 'Ход принят!';

    let robotCity = allCities.find(c => c[0].toLowerCase() === lastLetter && !cities.includes(c));
    if (robotCity) {
        cities.push(robotCity);
        lastLetter = robotCity[robotCity.length - 1].toLowerCase();
        messageDiv.textContent += ' Робот выбрал город ' + robotCity + '.';
    } else {
        messageDiv.textContent += ' Робот не смог найти подходящий город.';
    }
});
