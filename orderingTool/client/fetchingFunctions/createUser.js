const sectionCreateAccount = document.querySelector('.section-create-account')
const sectionUserLogin = document.querySelector('.section-user-login')
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("form-create-account").addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submission intercepted.');

        const formData = {
            username: document.getElementById("User-desiredUsername").value,
            firstName: document.getElementById("User-fName").value,
            lastName: document.getElementById("User-lName").value,
            email: document.getElementById("User-email").value,
            birthDate: document.getElementById("User-birthDate").value,
            password: document.getElementById("User-password").value
        };

        console.log(formData);

        try {
            const response = await fetch('http://localhost:3000/create-account', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            const result = await response.json();
            alert("Account created: " + result.message);
            sectionCreateAccount.classList.add('hide')
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to create account");
        }
    });


    

});