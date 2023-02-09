function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const nameColorText = document.querySelector(".color");
const body = document.querySelector("body");

btnChangeColor.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  nameColorText.textContent = body.style.backgroundColor;
}
