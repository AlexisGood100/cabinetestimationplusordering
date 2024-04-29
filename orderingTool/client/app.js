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



