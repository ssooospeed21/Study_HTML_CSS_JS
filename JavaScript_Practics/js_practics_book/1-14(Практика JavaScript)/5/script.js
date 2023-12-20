let screenType = document.getElementById('screenType');
let screenKeyboard = document.getElementById('screenKeyboard');
let screenKeyboardShow = document.getElementById('screenKeyboardShow');
let capsLockActivated = false;

function show() {
    if (screenKeyboard.style.display === 'none') {
        screenKeyboard.style.display = "block";
    } else {
        screenKeyboard.style.display = "none";
    }
}

function addLetter(letter) {
    if (letter === 'Backspace') {
        let currentValue = screenType.value;
        screenType.value = currentValue.slice(0, -1);
    } else {
        if (capsLockActivated) {
            letter = letter.toUpperCase();
        }
        screenType.value += letter;
    }
}

function toggleCapsLock() {
    capsLockActivated = !capsLockActivated;
    let capsLockButton = document.querySelector('.key:last-child');
    capsLockButton.classList.toggle('capsLockOn');
}

screenType.addEventListener('input', function() {
    if (capsLockActivated) {
        this.value = this.value.toUpperCase();
    }
});