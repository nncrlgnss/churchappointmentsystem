document.getElementById('finalizePaymentBtn').addEventListener('click', function () {
    const amount = document.getElementById('paymentAmount').value;
    const provider = document.getElementById('ewalletProvider').value;

    // Store data in localStorage
    localStorage.setItem('paymentAmount', amount);
    localStorage.setItem('walletProvider', provider);

    // Redirect to receipt page
    window.location.href = 'receipt.html';
});
