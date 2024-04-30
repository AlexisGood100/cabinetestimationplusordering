function displayCreateSingleCabinetOrder(parent, inp1, inp2, inp3, inp4){
        let divCabinet = document.createElement('div');
        divCabinet.classList.add('div-cabinet-order')
        let divCabType = document.createElement('div');
        let pCabType = document.createElement('p')
        pCabType.innerText = `Type: ${inp1}`
    
        let divCabWidth = document.createElement('div');
        let pCabWidth = document.createElement('p')
        pCabWidth.innerText = `Height: ${inp2}`
    
        let divCabHeight = document.createElement('div');
        let pCabHeight = document.createElement('p')
        pCabHeight.innerText = `Width: ${inp3}`
    
    
        let divCabColor = document.createElement('div');
        let pCabColor = document.createElement('p')
        pCabColor.innerText = `Color: ${inp4}`
        
    divCabType.appendChild(pCabType);
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
        divCabinet.remove();

    })
    divCabinet.appendChild(buttonDeleteCabinet)
    parent.appendChild(divCabinet)
    let cabinet = {
        type:inp1,
        width:inp2,
        height:inp3,
        color:inp4
    }
    return cabinet;
}