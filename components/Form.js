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
    dateLabel.innerText = 'Date: '
    let dateInput = document.createElement('input');
    formForm.appendChild(dateLabel);
    formForm.appendChild(dateInput);

    let quantityLabel = document.createElement('label');
    quantityLabel.innerText = 'Quantity: '
    let quantityInput = document.createElement('input')
    formForm.appendChild(quantityLabel);
    formForm.appendChild(quantityInput);
    
    let submitForm = document.createElement('submit');
    submitForm.classList.add('submit-form');
    submitForm.innerText = 'Generate Form';
    formForm.appendChild(submitForm);

    submitForm.addEventListener('click', ()=>{
        let table = document.querySelector('.table-for-cells')
        let quantityValue = quantityInput.value;
        for(let i = 0; i<quantityValue;i++){
            let tr = document.createElement('tr');
            tr.classList.add('tr-for-cell-rows')
            let input_width = document.createElement('input');
            let input_height = document.createElement('input');
            let input_openingW = document.createElement('input');
            let input_openingH = document.createElement('input');
            tr.appendChild(input_width)
            tr.appendChild(input_height)
            tr.appendChild(input_openingW)
            tr.appendChild(input_openingH)
            table.appendChild(tr)
            console.log(tr);
        }
    })

    divForm.appendChild(formForm);
    return divForm;
}