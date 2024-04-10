function conversionOfWidths(nodelist1, nodelist2, hingeOverlay){
    console.log(nodelist1);
    console.log(nodelist2);
    let i = 0
    nodelist1.forEach((node)=>{
  let openingWidth = parseFloat(nodelist2[i].value)
  if(openingWidth > parseFloat(node.value) * 2){
    node.value = ((openingWidth+.75)/2).toFixed(3);
  } else {
      openingWidth += (hingeOverlay * 2);      
      node.value = openingWidth;
  }
i+=1;
    })
}


function conversionOfHeights(nodelist1, nodelist2, hingeOverlay){
    console.log(nodelist1);
    console.log(nodelist2);
    let i = 0
    nodelist1.forEach((node)=>{
  let openingHeight = parseFloat(nodelist2[i].value)
    openingHeight += (hingeOverlay * 2);      
    node.value = openingHeight;
    i+=1;
    })
}

function conversionOfMeasurements(nodelist1, nodelist2, hingeOverlay){
  console.log(nodelist1);
  console.log(nodelist2);
  let i = 0
  nodelist1.forEach((node)=>{
let opening = parseFloat(nodelist2[i].value)
  opening += (hingeOverlay * 2);      
  node.value = opening;
  i+=1;
  })
}
