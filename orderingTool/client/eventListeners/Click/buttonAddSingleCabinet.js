const createFormForAddingSingleCabinet = () => {
    let divForm = document.createElement('div');
    divForm.classList.add('div-form-add-cabinet')
    let formAddCabinet = document.createElement('form');
    let typeLabel = document.createElement('label');
    let typeInput = document.createElement('input');
    typeLabel.innerText = 'Type: '
    let widthLabel = document.createElement('label');
    widthLabel.innerText = 'Width: '
    let widthInput = document.createElement('input');
    let heightLabel = document.createElement('label');
    heightLabel.innerText = 'Height: '
    let heightInput = document.createElement('input');
    let colorLabel = document.createElement('label');
    colorLabel.innerText = 'Color: '
    let colorInput = document.createElement('input');
    formAddCabinet.appendChild(typeLabel)
    formAddCabinet.appendChild(typeInput)
    formAddCabinet.appendChild(widthLabel)
    formAddCabinet.appendChild(widthInput)
    formAddCabinet.appendChild(heightLabel)
    formAddCabinet.appendChild(heightInput)
    formAddCabinet.appendChild(colorLabel)       
    formAddCabinet.appendChild(colorInput) 
    let buttonFinalizeItem = document.createElement('button')
    buttonFinalizeItem.innerText = 'Add Cabinet';
    formAddCabinet.appendChild(buttonFinalizeItem)
    buttonFinalizeItem.addEventListener('click', (e)=>{
        e.preventDefault()
    let testing = displayCreateSingleCabinetOrder(document.querySelector('.div-cabinet-csv-order'), typeInput.value, parseFloat(widthInput.value), parseFloat(heightInput.value), colorInput.value)
    cabinets.push(testing)
    divForm.remove()
    })
    divForm.appendChild(formAddCabinet)
    document.querySelector('.div-cabinet-order-form-add').appendChild(divForm)
}