function makeCheckBox(name, value_of, id, price, unique_indentifier, totalPrice, additionalWork){
    let container = document.createElement('div')
    container.classList.add('div-indiv-checkbox')
    let label = document.createElement('label');
    let checkBox = document.createElement('input')
    let price_p = document.createElement('p');
    price_p.innerText = 'Price: $'
    let priceSpan =  document.createElement('span')
    priceSpan.innerText = price;
    price_p.appendChild(priceSpan)
    checkBox.name = name;
    checkBox.type = 'checkbox'
    checkBox.classList.add('check-box')
    checkBox.classList.add(unique_indentifier)
    checkBox.value = value_of
    label.innerText = checkBox.value
    checkBox.id = id
    container.appendChild(label)
    container.appendChild(checkBox)
    container.appendChild(price_p)
//function for checking if the checkbox is checked or not.
    checkBox.addEventListener('change', (event)=>{
        if(event.target.checked){
            totalPrice.total += parseFloat(price.toFixed(1));
            updatePricingForExtraWork(totalPrice);
          
            additionalWork.total += price
           if(price == 300){
            IP = true;
        }
        else if(price === 150){
           WBP = true
        }
        else if(price === 50){
            TK = true;
        }
        } else {
            totalPrice.total -= parseFloat(price.toFixed(1));
            updatePricingForExtraWork(totalPrice);
            additionalWork.total -= price
            if(price == 300){
                IP = false;
            }
            else if(price === 150){
               WBP = false;
            }
            else if(price === 50){
                TK = false;
            }
        }
    })

    return container
}


