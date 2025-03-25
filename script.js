// Validate the form on submit
document.getElementById('profileForm').addEventListener('submit', function (event) {
    const form = event.target;
    const phoneInput = document.getElementById('phone').value;

    // Check if the phone number is exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput)) {
        event.preventDefault();
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    // Check if the star marked fields are filled out before submit
    if (!form.checkValidity()) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    }
});