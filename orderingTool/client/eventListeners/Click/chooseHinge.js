document.querySelectorAll('.radio-choice-hinge').forEach((radio_button)=>{
    radio_button.addEventListener('click', ()=>{
        accountSubmissionObj.hingeOverlay = radio_button.value;
    })
})