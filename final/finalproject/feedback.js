document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.feedback-form');
    
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const emceeField = document.getElementById('favorite-emcee');
    const commentsField = document.getElementById('comments');
    
    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        if (nameField.value.trim() === "") {
            alert("Please enter your name.");
            return false;
        }

        if (emailField.value.trim() === "") {
            alert("Please enter your email.");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailField.value)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (emceeField.value === "") {
            alert("Please select your favorite emcee.");
            return false;
        }

        if (commentsField.value.trim() === "") {
            alert("Please enter your comments.");
            return false;
        }

        return true;
    }
});
