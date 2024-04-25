


let accountSubmissionObj = {
    cabinetType: null,
    cabinetColor: null,
    hingeOverlay: null,
    pullType: null,
    pullSize: null,
    locationName: null
}

// const createAccount = (submissionObject)=>{ //this is to finalize the location
// const accountSubmissionObj = {
//     cabinetType : submissionObject.cabinetType,
//     cabinetColor: submissionObject.cabinetColor,
//     hingeOverlay: submissionObject.hingeOverlay,
//     pullType: submissionObject.pullType,
//     pullSize:submissionObject.pullSize,
//     locationName:submissionObject.locationName,
// }

// return accountSubmissionObj;
// }


let cabinetType = null;
// buttons for choosing the style of cabinet.
document.querySelectorAll('.div-choice-cabinet')[0].addEventListener('click', () => {
    accountSubmissionObj.cabinetType = 'Wood';
});
document.querySelectorAll('.div-choice-cabinet')[1].addEventListener('click', () => {
    accountSubmissionObj.cabinetType = 'Unique';
});
document.querySelectorAll('.div-choice-cabinet')[2].addEventListener('click', () => {
    accountSubmissionObj.cabinetType = 'Odd';
});
//end of style
// Violet Teal, Crimson Black Silver, Burnt Orange, Green Orange Pink, Bright Aqua
//buttons for choosing the color of cabinets
document.querySelectorAll('.div-choice-color').forEach((button, i) => {
    button.addEventListener('click', () => {
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

document.querySelectorAll('.radio-choice-hinge')[0].addEventListener('click', () => {
    accountSubmissionObj.hingeOverlay = .5;
})
document.querySelectorAll('.radio-choice-hinge')[1].addEventListener('click', () => {
    accountSubmissionObj.hingeOverlay = 1;
})
document.querySelectorAll('.radio-choice-hinge')[2].addEventListener('click', () => {
    accountSubmissionObj.hingeOverlay = 1.25;
})
document.querySelectorAll('.radio-choice-hinge')[3].addEventListener('click', () => {
    accountSubmissionObj.hingeOverlay = 1.5;
})
//pullType 
document.querySelectorAll('.button-choice-pull').forEach((button, i) => {
    button.addEventListener('click', () => {
        accountSubmissionObj.pullType = document.querySelectorAll('#p-pull-type')[i].innerText;
        console.log(accountSubmissionObj.pullType);
    })
})

//pullSize
document.querySelectorAll('.div-four-inch')[0].addEventListener('click', () => {
    console.log(accountSubmissionObj.pullSize);
});

//Location name
document.querySelector('#submit-location-name').addEventListener('click', (e) => {
    e.preventDefault()
    accountSubmissionObj.locationName = document.querySelector('#input-location-name').value;
});


document.querySelector('.button-display-locations').addEventListener('click', ()=>{
    fetchAndDisplayLocations()
});