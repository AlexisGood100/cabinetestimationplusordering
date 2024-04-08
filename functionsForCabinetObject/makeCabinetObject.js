let makeCabinetObject = (allHeights, allWidths, cabinetArray, globalColor)=>{
    let i = 0;
    allHeights.forEach((_)=>{
        let TypeOf = arrayOfTypes[i]
        let currentHeight = allHeights[i]
        let currentWidth = allWidths[i]
        let cabinetObject = {
            Type: TypeOf,
            Width: currentWidth,
            Height:currentHeight,
            Color:globalColor
        }
        cabinetArray.push(cabinetObject);
        i+=1;
    })
    console.log(cabinetArray);
}
