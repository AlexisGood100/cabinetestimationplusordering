let allHeights_ = (allHeights)=>{
    let allHeightsDisplay = document.querySelectorAll('.input-height');
 
   allHeightsDisplay.forEach((height)=>{
        allHeights.push(height.value)
    })
}