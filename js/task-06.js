const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onLossFocusInput);

function onLossFocusInput() {
   if (textInput.value.length !== Number(textInput.dataset.length)) {
       return textInput.classList.add("invalid");
    }
    textInput.classList.remove("invalid");   
    textInput.classList.add("valid");  
}