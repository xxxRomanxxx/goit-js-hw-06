const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === 0) {
        outputName.textContent = 'Anonymous';
    } else {
        outputName.textContent = event.currentTarget.value;
    }
}