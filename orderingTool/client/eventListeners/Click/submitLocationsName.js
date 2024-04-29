
//Location name
document.querySelector('#submit-location-name').addEventListener('click', (e) => {
    e.preventDefault()
    accountSubmissionObj.locationName = document.querySelector('#input-location-name').value;
    document.querySelector('.section-order-or-homepage').classList.remove('hide');
    document.querySelector('.div-choice-location-information').classList.add('hide');
});