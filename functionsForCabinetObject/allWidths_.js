let allWidths_ = (allWidths)=>{
    let allWidthsDisplay = document.querySelectorAll('.input-width');
   
   allWidthsDisplay.forEach((width)=>{
        allWidths.push(width.value)
    })
    
}


