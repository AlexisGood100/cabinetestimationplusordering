
//Location name
document.querySelector('#submit-location-name').addEventListener('click', (e) => {
    e.preventDefault()
    accountSubmissionObj.locationName = document.querySelector('#input-location-name').value;
});