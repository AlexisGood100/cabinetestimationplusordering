document.querySelectorAll('.div-choice-color').forEach((button, i) => {
    button.addEventListener('click', () => {
        accountSubmissionObj.cabinetColor = document.querySelectorAll('.div-choice-color p')[i].innerText;
        console.log(accountSubmissionObj.cabinetColor)
    })
})