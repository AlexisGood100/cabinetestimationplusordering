function updateHingeAndScrewQuantity(labelOne, labelTwo, label3, input1){
labelOne.innerText = `Total Screw Quantity: ${input1 * 4}`;
labelTwo.innerText = `Total Hinge Quantity: ${input1 * 2}`;
label3.innerText = `Total Pull Quantity: ${input1 * 1};`
}