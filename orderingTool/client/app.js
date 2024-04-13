       
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


let accountSubmissionObj = {
    cabinetType : null,
    cabinetColor: null,
    hingeOverlay: null,
    pullType: null,
    pullSize:null,
    locationName: null
}

const createAccount = (submissionObject)=>{ //this is to finalize the location
const accountSubmissionObj = {
    cabinetType : submissionObject.cabinetType,
    cabinetColor: submissionObject.cabinetColor,
    hingeOverlay: submissionObject.hingeOverlay,
    pullType: submissionObject.pullType,
    pullSize:submissionObject.pullSize,
    locationName:submissionObject.locationName,
}
return accountSubmissionObj;
}


let cabinetType = null;
// buttons for choosing the style of cabinet.
document.querySelectorAll('.div-choice-cabinet')[0].addEventListener('click', ()=>{
accountSubmissionObj.cabinetType = 'Wood';
});
document.querySelectorAll('.div-choice-cabinet')[1].addEventListener('click', ()=>{
    accountSubmissionObj.cabinetType = 'Unique';
});
document.querySelectorAll('.div-choice-cabinet')[2].addEventListener('click', ()=>{
    accountSubmissionObj.cabinetType = 'Odd';
});
//end of style
// Violet Teal, Crimson Black Silver, Burnt Orange, Green Orange Pink, Bright Aqua
//buttons for choosing the color of cabinets
    document.querySelectorAll('.div-choice-color').forEach((button, i)=>{
        button.addEventListener('click', ()=>{
            accountSubmissionObj.cabinetColor = document.querySelectorAll('.div-choice-color p')[i].innerText;
            console.log(accountSubmissionObj.cabinetColor)
        })
    })
//end of color

//radio buttons for the hinges
// if (document.getElementById('radioID').checked) {
//     console.log('The radio button is checked');
// }
//end of hinges

document.querySelectorAll('.radio-choice-hinge')[0].addEventListener('click', ()=>{
    accountSubmissionObj.hingeOverlay = .5;
})
document.querySelectorAll('.radio-choice-hinge')[1].addEventListener('click', ()=>{
    accountSubmissionObj.hingeOverlay = 1;
})
document.querySelectorAll('.radio-choice-hinge')[2].addEventListener('click', ()=>{
    accountSubmissionObj.hingeOverlay = 1.25;
})
document.querySelectorAll('.radio-choice-hinge')[3].addEventListener('click', ()=>{
    accountSubmissionObj.hingeOverlay = 1.5;
})
//pullType 
document.querySelectorAll('.button-choice-pull').forEach((button, i)=>{
    button.addEventListener('click', ()=>{
        accountSubmissionObj.pullType = document.querySelectorAll('#p-pull-type')[i].innerText;
        console.log(accountSubmissionObj.pullType);
    })
})

//pullSize
document.querySelectorAll('.div-four-inch')[0].addEventListener('click', ()=>{
    
    console.log(accountSubmissionObj.pullSize);

});

//Location name
document.querySelector('#submit-location-name').addEventListener('click', (e)=>{
    // e.preventDefault()
    accountSubmissionObj.locationName = document.querySelector('#input-location-name').value;
})


document.querySelector('.button-choice-save-location').addEventListener('click',()=>[
    
])