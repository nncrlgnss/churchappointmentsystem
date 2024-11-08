<?php
session_start();
include 'db_config.php'; // Include your database connection configuration

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($password)) {
        echo "Both username and password are required.";
        exit;
    }

    // Prepare the SQL statement to prevent SQL injection
    $sql = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $sql->bind_param("s", $username);
    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['username']; // Save username in session
            echo "Login successful!";
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "Username not found!";
    }

    // Close connections
    $sql->close();
    $conn->close();
}
?>


