document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

   
    errorMessage.textContent = "";
    successMessage.textContent = "";

    
    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

   
    const loginData = {
        username: email,
        password: password
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then(response => response.json())
    .then(data => {
        successMessage.textContent = "Login successful!";
       
        alert("Login was successful!");
    })
    .catch((error) => {
        errorMessage.textContent = "Login failed. Please try again.";
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});