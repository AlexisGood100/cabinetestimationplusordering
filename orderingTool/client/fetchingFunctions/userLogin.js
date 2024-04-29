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
            sectionUserLogin.classList.add('hide')
            document.querySelector('.section-add-location').classList.remove('hide')
            
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed: ' + error.message);
        }
    };