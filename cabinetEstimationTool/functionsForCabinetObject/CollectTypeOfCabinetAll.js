function CollectTypeOfCabinetAll(arrayOfTypes){
    console.log(document.querySelectorAll('.option-for-cabinet'))
    document.querySelectorAll('.option-for-cabinet').forEach((option)=>{
        if(option.classList.contains('selected') && option.classList.contains('option-for-FF')){
            numOfFF += 1;
            arrayOfTypes.push('FalseF')
        }
        if(option.classList.contains('selected') && option.classList.contains('option-for-door')){
            numOfDoor += 1;
            arrayOfTypes.push('Door')
        }
        if(option.classList.contains('selected') && option.classList.contains('option-for-drawer')){
            numOfDrawer += 1;
            arrayOfTypes.push('Drawer')
        }
    })
}