function makeForm() {
    let divForm = document.createElement('div');
    divForm.classList.add('div-form')
    let formForm = document.createElement('form');
    let labelPropertyName = document.createElement('label');
    labelPropertyName.innerText = 'Property Name: '
    let labelUnitNumber = document.createElement('label');
    labelUnitNumber.innerText = 'Unit Number: '
    let inputPropertyName = document.createElement('input');
    let inputUnitNumber = document.createElement('input');

    formForm.appendChild(labelPropertyName);
    formForm.appendChild(inputPropertyName);
    formForm.appendChild(labelUnitNumber);
    formForm.appendChild(inputUnitNumber);

    let labelColor = document.createElement('label');
    labelColor.innerText = 'Color: '
    let inputColor = document.createElement('input');

    formForm.appendChild(labelColor);
    formForm.appendChild(inputColor);

    let dateLabel = document.createElement('label')
    dateLabel.innerText = 'Date'
    let dateInput = document.createElement('input');
    formForm.appendChild(dateLabel);
    formForm.appendChild(dateInput);
    
    let submitForm = document.createElement('submit');
    submitForm.classList.add('submit-form');
    submitForm.innerText = 'Generate Form';
    formForm.appendChild(submitForm);

    submitForm.addEventListener('click', ()=>{
        console.log('clicked');
    })

    divForm.appendChild(formForm);
    return divForm;
}