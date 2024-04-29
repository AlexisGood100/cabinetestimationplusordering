
function displayCabinetOrder(arrayCabinetOrder, parent){
    arrayCabinetOrder.forEach((cabinet)=>{
        let divCabinet = document.createElement('div');
        let divCabType = document.createElement('div');
        let pCabType = document.createElement('p')
        pCabType.innerText = `Type: ${cabinet.type}`
    
        let divCabWidth = document.createElement('div');
        let pCabWidth = document.createElement('p')
        pCabWidth.innerText = `Height: ${cabinet.width}`
    
        let divCabHeight = document.createElement('div');
        let pCabHeight = document.createElement('p')
        pCabHeight.innerText = `Width: ${cabinet.height}`
    
    
        let divCabColor = document.createElement('div');
        let pCabColor = document.createElement('p')
        pCabColor.innerText = `Color: ${cabinet.color}`
        
    divCabColor.appendChild(pCabType);
    divCabWidth.appendChild(pCabWidth);
    divCabHeight.appendChild(pCabHeight);
    divCabColor.appendChild(pCabColor);
    
    divCabinet.appendChild(divCabType);
    divCabinet.appendChild(divCabWidth);
    divCabinet.appendChild(divCabHeight);
    divCabinet.appendChild(divCabColor);
    
    let buttonDeleteCabinet = document.createElement('button')
    buttonDeleteCabinet.innerText = 'Delete'
    buttonDeleteCabinet.addEventListener('click', ()=>{
        divCabinet.remove()
    })
    divCabinet.appendChild(buttonDeleteCabinet)
    parent.appendChild(divCabinet)
    })
    }