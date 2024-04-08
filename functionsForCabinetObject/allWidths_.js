let allWidths_ = (allWidths)=>{
    let allWidthsDisplay = document.querySelectorAll('.input-width');
    console.log(allWidths)
   allWidthsDisplay.forEach((width)=>{
        allWidths.push(width.value)
    })
    
}