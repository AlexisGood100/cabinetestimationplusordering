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

let accountSubmissionObj = {
    cabinetType: null,
    cabinetColor: null,
    hingeOverlay: null,
    pullType: null,
    pullSize: 6,
    locationName: null,
}

let cabinetType = null;

//displaying the locations when the button is clicked
document.querySelector('.button-display-locations').addEventListener('click', ()=>{
    fetchAndDisplayLocations()
});



