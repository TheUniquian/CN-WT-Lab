<script></script>
function validateForm() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');

    // Get error divs
    var nameError = document.getElementById('nameError');
    var phoneError = document.getElementById('phoneError');
    var emailError = document.getElementById('emailError');

    // Reset previous error messages
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameInput.focus();
        return;
    }

    // Validate Phone Number
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Enter a valid 10-digit phone number';
        phoneInput.focus();
        return;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email address';
        emailInput.focus();
        return;
    }

    // If all validations pass, you can submit the form or perform additional actions
    alert('Form submitted successfully!');
} 
