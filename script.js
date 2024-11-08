// Utility function to check for special characters
function hasSpecialChars(input) {
    const regex = /[^a-zA-Z0-9]/g; // Only allows letters and numbers
    return regex.test(input);
}

// Show Login Form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

// Show Register Form
function showRegister() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

// Cancel Login
function cancelLogin() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('invalidMessage').style.display = 'none'; // Hide any invalid message if displayed
}

// Handle Login Form Submission
document.getElementById('loginFormContent').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (hasSpecialChars(username) || hasSpecialChars(password)) {
        document.getElementById('loginError').style.display = 'block';
    } else {
        document.getElementById('loginError').style.display = 'none';
        alert('Login successful');
        window.location.href = 'file:///D:/DATABASEFINAL/NO%20DIRECTION/index.html#Services'; // Redirect to choices page
    }
});

// Handle Register Form Submission
document.getElementById('registerFormContent').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (hasSpecialChars(username) || hasSpecialChars(password)) {
        document.getElementById('registerError').style.display = 'block';
    } else {
        document.getElementById('registerError').style.display = 'none';
        alert('Registration successful');
        window.location.href = 'choices.html'; // Redirect to choices page
    }
});

// Show login form when "SIGN IN" is clicked
document.getElementById('signInBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showLogin(); // Show login form
});

// Toggle to register form from login form
document.getElementById('toRegister').addEventListener('click', function(e) {
    e.preventDefault();
    showRegister(); // Show register form
});

// Toggle to login form from register form
document.getElementById('toLogin').addEventListener('click', function(e) {
    e.preventDefault();
    showLogin(); // Show login form
});

// Hide the forms and overlay when clicking the overlay
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Change threshold as needed
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});


    // Smooth scroll for services link
    document.querySelector('a[href="#services"]').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });



