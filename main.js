//getting the root of the html file
const body = document.querySelector('body')
//returning the html from components
let additionalWork = {total:0}

let html_Header = makeHeader();
let totalPrice = {total:0};
let allValuesForRowsArr = [];
let form = makeForm(totalPrice, allValuesForRowsArr, additionalWork);
let newMainForChoices = makeMainChoices();
let pricingSection = PricingArea();
//appending the html components to the root (body in this case)
body.appendChild(html_Header);
//additional work

let additionalHardwareSection = additionalHardWare()
document.querySelector('.div-additional-hardware').appendChild(additionalHardwareSection)
let divForWorkOrder = makeReusableGenericDiv('div-work-orders');

body.appendChild(divForWorkOrder);
// end of additional work 
body.appendChild(form);
body.appendChild(pricingSection);
body.appendChild(newMainForChoices);
//Checkboxes
let checkBoxContainer = makeReusableGenericDiv('div-checkbox');
let checkBoxInteriorPainting = makeCheckBox('extra-work', "Interior Painting: ", 0, 300, 'checkbox-interior-p', totalPrice, additionalWork);
let checkBoxWallBottoms = makeCheckBox('extra-work', "Wall Bottoms: ", 1, 150, 'checkbox-wall-b', totalPrice, additionalWork);
let checkBoxToeKick = makeCheckBox('extra-work', "Toe-Kick: ", 2, 50, 'checkbox-toekick', totalPrice, additionalWork);

newMainForChoices.appendChild(checkBoxInteriorPainting);
newMainForChoices.appendChild(checkBoxWallBottoms);
newMainForChoices.appendChild(checkBoxToeKick);
//end of checkboxes

body.appendChild(checkBoxContainer);
let pricingTable = document.querySelector('.pricing-table');
//Div for table cells
let divForTableCells = makeReusableGenericDiv('div-table-cells');
let tableForCells = TableForCells();
divForTableCells.appendChild(tableForCells);
body.appendChild(divForTableCells);
//End of div for table cells

//Additional hardware

document.querySelector('.arrow-additional-hardware').addEventListener('click', (e)=>{
    document.querySelector('.div-for-extra-hardware').classList.remove('hide');
    document.querySelector('.arrow-right').classList.remove('hide')
    document.querySelector('.arrow-left').classList.add('hide')
})
document.querySelector('.arrow-right').addEventListener('click', (e)=>{
    document.querySelector('.div-for-extra-hardware').classList.add('hide');
    document.querySelector('.arrow-right').classList.add('hide')
    document.querySelector('.arrow-left').classList.remove('hide')
})
//End of additional hardware
