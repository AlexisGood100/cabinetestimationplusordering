
function makeForm(total, allValuesForRowsArr) {
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
           

            //change event on width
            input_width.addEventListener('change', ()=>{ 
                total.total = 0;
               
                let squareFootage = (input_width.value * input_height.value)/144
                let actualValue = squareFootage * 10.5
                allValuesForRowsArr[i] = actualValue;
                
                    console.log('changing')
                    if(input_width.value < input_openingW.value - (.5 * input_width.value)){ // feature for touching doors
                        tr.classList.add('orange')
                    } else {
                        tr.classList.remove('orange')
                    }
    
                    input_width.value > 0 && input_height.value > 0 ? square_footage.innerText = squareFootage :
                    square_footage.innerText = 0; // square footage
                    price_indiv.innerText = 0;

                    squareFootage > 0 ? price_indiv.innerText =  actualValue : price_indiv.value = 100; //price of actual cabinet
                    allValuesForRowsArr.forEach(element => {
                        total.total += element;
                        console.log(total.total)
                    });
            //  document.querySelector('.pricing-total').innerText = total.total;
             updatePricingForExtraWork(total)
                }) //end of  event listener for change

                
                let option_door = document.createElement('option')
                let td_type = document.createElement('td')
                option_door.value = 'Door';
                option_door.innerText = 'Door';
                let option_drawer = document.createElement('option');
                option_drawer.classList.add('hide')
                option_drawer.value = 'Drawer';
                option_drawer.innerText = 'Drawer';
                let option_falseF = document.createElement('option');
                option_falseF.classList.add('hide')
                option_falseF.value = 'False Front';
                option_falseF.innerText = 'False Front'
                    option_door.addEventListener('mouseover', ()=>{
                        option_drawer.classList.remove('hide')
                    option_falseF.classList.remove('hide')
                })
                option_drawer.addEventListener('mouseover', ()=>{
                    option_door.classList.remove('hide')
                option_falseF.classList.remove('hide')
            })
            option_falseF.addEventListener('mouseover', ()=>{
                option_drawer.classList.remove('hide')
            option_door.classList.remove('hide')
        })

                option_door.addEventListener('click', ()=>{
                    option_door.classList.add('selected')
                    option_falseF.classList.add('hide');
                    option_drawer.classList.add('hide');
                    option_falseF.classList.remove('selected');
                    option_drawer.classList.remove('selected');
                })
                option_falseF.addEventListener('click', ()=>{
                    option_falseF.classList.add('selected')
                    option_door.classList.add('hide');
                    option_drawer.classList.add('hide');
                    option_door.classList.remove('selected');
                    option_drawer.classList.remove('selected');

                })
                option_drawer.addEventListener('click', ()=>{
                    option_drawer.classList.add('selected')
                    option_falseF.classList.add('hide');
                    option_door.classList.add('hide');
                    option_door.classList.remove('selected');
                    option_falseF.classList.remove('selected');
                })
                




                td_type.appendChild(option_door);
                td_type.appendChild(option_drawer);
                td_type.appendChild(option_falseF)
                            let input_height = document.createElement('input');
                            let input_openingW = document.createElement('input');
                            let input_openingH = document.createElement('input');
                            let square_footage = document.createElement('p');
                            let td_height = document.createElement('td');
                            td_height.appendChild(input_height)
                            let td_openingW = document.createElement('td');
                            td_openingW.appendChild(input_openingW)
                            let td_width =  document.createElement('td');
                            td_width.appendChild(input_width)
                            let td_openingH = document.createElement('td');
                            td_openingH.appendChild(input_openingH)

            //change event on height change
            input_height.addEventListener('change', ()=>{ 
                total.total = 0;
                    let squareFootage = (input_width.value * input_height.value)/144
                    let actualValue = squareFootage * 10.5
                    allValuesForRowsArr[i] = actualValue;
                    document.querySelector('.pricing-total').innerText = total.total;
                     
            
                if(input_openingH.value >  input_height.value){ // feature for touching doors
                    tr.classList.add('red')
                } else {
                    tr.classList.remove('red')
                }


                input_width.value > 0 && input_height.value > 0 ? square_footage.innerText = squareFootage :
                square_footage.innerText = 0; // square footage
                price_indiv.innerText = 0;

                squareFootage > 0 ? price_indiv.innerText =  actualValue : price_indiv.innerText = 100; //price of actual cabinet
                
                allValuesForRowsArr.forEach(element => {
                    total.total += element;
                    console.log(total.total)
                });    
                // document.querySelector('.pricing-total').innerText = total.total;
                updatePricingForExtraWork(total)
            }) //end of width event listener for change
            
            square_footage.innerText = 0;
            let price_indiv = document.createElement('p')
            price_indiv.innerText = 0;
            tr.appendChild(td_type)
            tr.appendChild(td_width)
            tr.appendChild(td_height)
            tr.appendChild(td_openingW)
            tr.appendChild(td_openingH)
            tr.appendChild(square_footage);
            tr.appendChild(price_indiv)
            table.appendChild(tr)
            console.log(tr);
        }
    })

    divForm.appendChild(formForm);
    return divForm;
}