document.getElementById('confirmPaymentBtn').addEventListener('click', function () {
    const amount = document.getElementById('paymentAmount').value;
    const provider = document.getElementById('ewalletProvider').value;

    if (!amount || !provider) {
        alert("Please fill in all fields.");
        return;
    }

    const confirmationSection = document.getElementById('paymentConfirmation');
    const confirmationDetails = document.getElementById('confirmationDetails');

    confirmationDetails.innerHTML = `
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Provider:</strong> ${provider}</p>
    `;

    confirmationSection.style.display = 'block';
});

document.getElementById('finalizePaymentBtn').addEventListener('click', function () {
    alert("Payment successful! Thank you.");
    // Redirect to a thank you page or reset the form
    window.location.href = "thankyou.html";
});
