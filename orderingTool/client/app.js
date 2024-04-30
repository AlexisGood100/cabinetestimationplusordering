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
//end of location fetching

//start of button for adding form
const buttonAddCabinetFormInputs = document.querySelector('.button-add-cabinet-to-order');
buttonAddCabinetFormInputs.addEventListener('click', (e)=>{ 
e.preventDefault()
createFormForAddingSingleCabinet()
});
//end of button for adding form
