var password = document.getElementById("password");
function check(elem) {
    if (elem.value.length > 0) {
        if (elem.value != password.value) {
            document.getElementById("alert").innerText = "Passwords Do Not Match. Try Again."
        }
        else {
            document.getElementById("alert").innerText = ""
        }
    }
}

/*const input = document.querySelector('#password');
const error = document.querySelector('.TextError');

const ShowError = message => {
    error.style.color = '#FC4842';
    error.style.display = 'block';
    error.innerHTML = message;
}

const ShowPass = message => {
    error.style.color = '#FC4842';
    error.innerHTML = message;
}

const ValidatePassword = password => {
    const lowerCaseRegex = new RegExp('^(?=.*[a-z]');
    const upperCaseRegex = new RegExp('^(?=.*[A-Z]');
    const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^%&*]');
    const numericRegex = new RegExp('^(?=.*[0-9]');

    if (!password == 0) {
        if (password.length < 8) {
            ShowError("Your password must contain at least eight characters.");
        } else if (!lowerCaseRegex.test(password)) {
            ShowError("Your password must contain at least one lowercase letter.");
        } else if (!upperCaseRegex.test(password)) {
            ShowError("Your password must contain at least one uppercase letter.");
        } else if (!numericRegex.test(password)) {
            ShowError("Your password must contain at least one number.");
        } else if (!specialCharacterRegex.test(password)) {
            ShowError("Your password must contain one special character.")
        } else {
            ShowPass('Strong Password!')
        }   
    } else {
        ShowError("");
        ShowPass("");
    }
}

input.addEventListener('keyup', e => {
    const password = e.target.value;
    validatePassword(password);
});*/