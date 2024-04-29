document.querySelectorAll('.div-choice-cabinet')[0].addEventListener('click', () => {
    accountSubmissionObj.cabinetType = 'Wood';
    document.querySelector('.div-for-color-choice').classList.remove('hide');
    document.querySelector('.div-choice-for-cabinet-style').classList.add('hide');
});
document.querySelectorAll('.div-choice-cabinet')[1].addEventListener('click', () => {
    accountSubmissionObj.cabinetType = 'Unique';
    document.querySelector('.div-for-color-choice').classList.remove('hide');
    document.querySelector('.div-choice-for-cabinet-style').classList.add('hide');
}); 
document.querySelectorAll('.div-choice-cabinet')[2].addEventListener('click', () => {
    accountSubmissionObj.cabinetType = 'Odd';
    document.querySelector('.div-for-color-choice').classList.remove('hide');
    document.querySelector('.div-choice-for-cabinet-style').classList.add('hide');
});