// choices.js
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedService = this.id; // Get the ID of the clicked button
        window.location.href = `payment.html?service=${selectedService}`; // Redirect to payment.html with the service
    });
});
