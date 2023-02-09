const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const changeValue = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener("click", onClickDecrementBtn);
incrementButton.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn(event) {
    counterValue -= 1;
    return addValue(addValue);
}

function onClickIncrementBtn(event) {
    counterValue += 1;
    return addValue(addValue);
}

function addValue(event) {
    changeValue.textContent = counterValue;
}
