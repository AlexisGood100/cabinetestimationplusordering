document.querySelectorAll('.div-choice-color').forEach((button, i) => {
    button.addEventListener('click', () => {
        accountSubmissionObj.cabinetColor = document.querySelectorAll('.div-choice-color p')[i].innerText;
        console.log(accountSubmissionObj.cabinetColor)
        document.querySelector('.div-choice-hinge-overlay').classList.remove('hide');
        document.querySelector('.div-for-color-choice').classList.add('hide');
    })
})