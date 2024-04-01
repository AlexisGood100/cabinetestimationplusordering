function makeCheckBox(name, value_of, id, price, unique_indentifier, totalPrice){
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

    checkBox.addEventListener('change', (event)=>{
        if(event.target.checked){
            totalPrice.total += parseFloat(price);
            console.log(`Interior Painting = ${price}`)
            console.log(totalPrice.total)
            updatePricingForExtraWork(totalPrice)
        } else {
            totalPrice.total -= parseFloat(price);
            updatePricingForExtraWork(totalPrice)
        }
    })



    return container
}


