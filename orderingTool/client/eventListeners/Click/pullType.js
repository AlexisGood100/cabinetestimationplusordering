//pullType 
document.querySelectorAll('.button-choice-pull').forEach((button, i) => {
    button.addEventListener('click', () => {
        accountSubmissionObj.pullType = document.querySelectorAll('#p-pull-type')[i].innerText;
        console.log(accountSubmissionObj.pullType);
        document.querySelector('.div-choice-pull-type').classList.add('hide');
        document.querySelector('.div-choice-location-information').classList.remove('hide');
    })
});