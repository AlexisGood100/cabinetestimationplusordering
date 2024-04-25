//pullType 
document.querySelectorAll('.button-choice-pull').forEach((button, i) => {
    button.addEventListener('click', () => {
        accountSubmissionObj.pullType = document.querySelectorAll('#p-pull-type')[i].innerText;
        console.log(accountSubmissionObj.pullType);
    })
})