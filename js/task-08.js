const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', onFormSubmit);

const objInputForm = {};

function onFormSubmit(event) {
    event.preventDefault();
  
    const email = event.currentTarget.elements.email.value;
    const pass = event.currentTarget.elements.password.value;
    const formData = {
        email,
        pass,
    }
    
    if (email === "" || pass === "") {
        alert("All fields is required!")
    }

    console.log(formData);
    event.currentTarget.reset();
}
