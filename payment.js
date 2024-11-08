// payment.js
// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const service = urlParams.get('service'); // Extract the service from the URL

// Display the selected service
document.getElementById('serviceDisplay').textContent = `You have selected: ${service}`;

// Handle the payment form submission
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const selectedPayment = document.getElementById('paymentSelect').value; // Get selected payment method

    if (selectedPayment) {
        alert(`Payment confirmed using ${selectedPayment}. Thank you!`); // Confirm payment
    } else {
        alert('Please select a payment method before confirming.'); // Alert if no payment method is selected
    }
});
