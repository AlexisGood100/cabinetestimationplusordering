function updateHingeAndScrewQuantity(labelOne, labelTwo, label3, input1){
    labelOne.innerText = `Total Screw Price: ${input1.value * 6}`;
    labelTwo.innerText = `Total Hinge Price: ${input1.value * 8}`;
    label3.innerText = `Total Pull Price: ${input1.value * 3};`
    }