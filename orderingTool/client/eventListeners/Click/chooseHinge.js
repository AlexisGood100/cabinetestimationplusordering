document.querySelectorAll('.radio-choice-hinge').forEach((radio_button)=>{
    radio_button.addEventListener('click', ()=>{
        accountSubmissionObj.hingeOverlay = radio_button.value;
        document.querySelector('.div-choice-pull-type').classList.remove('hide');
        document.querySelector('.div-choice-hinge-overlay').classList.add('hide');
    })
})