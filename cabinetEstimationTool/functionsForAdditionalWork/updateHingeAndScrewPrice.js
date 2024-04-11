function updateHingeAndScrewPrice(labelOne, labelTwo, label3, input1, pTotal, hardwareCosts){
    let l1 = input1 * 6
    let l2 = input1 * 8
    let l3 = input1 * 3
    labelOne.innerText = `Total Screw Price: $${input1 * 6}`;
    labelTwo.innerText = `Total Hinge Price: $${input1 * 8}`;
    label3.innerText = `Total Pull Price: $${input1 * 3};`
    let total = l1 + l2 + l3
    hardwareCosts.total = total;
    console.log(hardwareCosts.total)
    pTotal.innerText = `Total Price: $${total}`;
    }