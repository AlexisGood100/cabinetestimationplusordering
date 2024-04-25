const buttonSave = document.querySelector('.button-choice-save-location');
const sectionAddLocation = document.querySelector('.section-add-location')
buttonSave.addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
        // Replace '/login' with your actual login endpoint
        const response = await fetch('http://localhost:3000/create-location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // accountSubmissionObj
                cabinetType: accountSubmissionObj.cabinetType,
                cabinetColor: accountSubmissionObj.cabinetColor,
                hingeOverlay: accountSubmissionObj.hingeOverlay,
                pullType: accountSubmissionObj.pullType,
                pullSize: accountSubmissionObj.pullSize,
                locationName: accountSubmissionObj.locationName,
            })
        });

        if (!response.ok) {
            throw new Error('Failed to save location');
        }
     
        const result = await response.json();
        console.log('Save successful:', result);
        alert('Save successful!');
        sectionAddLocation.classList.add('hide');
    } catch (error) {
        console.error('Save failed:', error);
        alert('Save failed: ' + error.message);
    }
});