       
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form-create-account").addEventListener('submit', async function(event) {
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    const result = await response.json();
    alert("Account created: " + result.message);
} catch (error) {
    console.error('Error:', error);
    alert("Failed to create account");
}

    });


    const loginForm = document.getElementById('loginForm');
    
    loginForm.onsubmit = async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Login Attempt:', username); // Logging for demonstration

        try {
            // Replace '/login' with your actual login endpoint
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (!response.ok) {
                console.log(username);
                console.log(password)
                throw new Error('Failed to login');
            }

            const result = await response.json();
            console.log('Login successful:', result);
            alert('Login successful!');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed: ' + error.message);
        }
    };

});