let div = document.getElementById('elem');
let button = document.getElementById('button');

button.addEventListener('click', function () {
    div.textContent = 'width ' + parseInt(div.style.width) + ' height ' + parseInt(div.style.height);
})