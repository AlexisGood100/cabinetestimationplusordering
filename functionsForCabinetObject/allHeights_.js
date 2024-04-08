let allHeights_ = (allHeights)=>{
    let allHeightsDisplay = document.querySelectorAll('.input-height');
    console.log(allHeights)
   allHeightsDisplay.forEach((height)=>{
        allHeights.push(height.value)
    })
   
}