const inputSlider = document.querySelector("#font-size-control");
const textZoom = document.querySelector("#text");

inputSlider.addEventListener('input', onInputChangeSlider);

function onInputChangeSlider() {
    return textZoom.style.fontSize = `${inputSlider.value}px`
}