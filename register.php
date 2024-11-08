<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "church_system";

$conn = new mysqli($servername, $username, $password, $dbname);

ini_set('display_errors', 1); error_reporting(E_ALL);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate input
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $email = $_POST['email'];
    $pass = $_POST['password'];

    // Basic validation (add more as needed)
    if (empty($user) || empty($email) || empty($pass)) {
        echo "All fields are required.";
        exit;
    }

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user, $email, $pass);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
