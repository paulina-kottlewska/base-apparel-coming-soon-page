const btn = document.getElementById('btn');
const input = document.getElementById('email');
const message = document.querySelector('.message');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = input.value;
    const isValid = validateEmail(email);

    // Checks if the email is valid or not and makes changes accordingly.
    if(!isValid) {
        input.classList.add('invalid');
        input.value = "";
        input.placeholder = "janeappleseed@email.com";
        message.classList.toggle('successful', false);
        message.classList.toggle('error', true)
        message.hidden = false;
        message.innerText = "Please provide a valid email";
    }
    else if(isValid) {
        input.classList.remove('invalid');
        message.classList.toggle('error', false)
        message.classList.toggle('successful', true);
        message.hidden = false;
        message.innerText = "You've successfully subscribed to our updates! Stay tuned.";
    }
})

input.addEventListener('input', () => {
    // If the input is not empty, removes the "invalid" class and hides the message.
    if(input.value !== "") {
        input.classList.remove('invalid');
        message.hidden = true;
    }
})

// Function to validate an email using a regular expression.
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
