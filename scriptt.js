// Check if the user is logged in and display their username
window.onload = function() {
    const username = localStorage.getItem("username");
    
    if (username) {
        // If the username exists, display it in the header
        document.getElementById("userDisplay").innerHTML = `Hello, ${username}`;
    }
};

// Register form handling
document.getElementById("registerFormContent").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    
    // Store the username and other details in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    
    // Redirect to login page or welcome page
    window.location.href = "login.html";
});

// Login form handling
document.getElementById("loginFormContent").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const enteredUsername = document.getElementById("loginUsername").value;
    const enteredPassword = document.getElementById("loginPassword").value;
    
    // Retrieve stored username and password
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    // Validate login
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Successfully logged in
        window.location.href = "index.html"; // Redirect to homepage or dashboard
    } else {
        // Show error message if login fails
        document.getElementById("loginError").style.display = "block";
    }
    localStorage.setItem("username", username);

    const username = localStorage.getItem("username");
if (username) {
    document.getElementById("userDisplay").innerHTML = `Hello, ${username}`;
}

});
