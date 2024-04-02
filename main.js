//getting the root of the html file
const body = document.querySelector('body')
//returning the html from components

let html_Header = makeHeader();
let totalPrice = {total:0};
let allValuesForRowsArr = [];
let form = makeForm(totalPrice, allValuesForRowsArr);
let newMainForChoices = makeMainChoices();
let pricingSection = PricingArea();
//appending the html components to the root (body in this case)
body.appendChild(html_Header);
body.appendChild(form);
body.appendChild(pricingSection);
body.appendChild(newMainForChoices);

let checkBoxContainer = makeReusableGenericDiv('div-checkbox');
let checkBoxInteriorPainting = makeCheckBox('extra-work', "Interior Painting: ", 0, 300, 'checkbox-interior-p', totalPrice);
let checkBoxWallBottoms = makeCheckBox('extra-work', "Wall Bottoms: ", 1, 150, 'checkbox-wall-b', totalPrice);
let checkBoxToeKick = makeCheckBox('extra-work', "Toe-Kick: ", 2, 50, 'checkbox-toekick', totalPrice);

newMainForChoices.appendChild(checkBoxInteriorPainting);
newMainForChoices.appendChild(checkBoxWallBottoms);
newMainForChoices.appendChild(checkBoxToeKick);

body.appendChild(checkBoxContainer);
let pricingTable = document.querySelector('.pricing-table');

let divForTableCells = makeReusableGenericDiv('div-table-cells');
let tableForCells = TableForCells();
divForTableCells.appendChild(tableForCells);
body.appendChild(divForTableCells);









//          need to make a section that acts a google sheet that has rows inserted.
//                      Or rather a table?   

//                                           App Layout
//-----------------------------------
// inputs for specific work order information
//-----------------------------------------------------------------------
// <label> </label> <input> </input> | <label> </label> <input> </input>| 

//Submit button     |          <button>Submit</button                   |
//                  ---------------------------------------------------- 
//  Type_of_cabinet | widths | heights | opening width | opening height |
//                  |   []   |    []   |      []       |       []       | cabinet object = (width, height, opening width, opening height)
//                  ====================================================
//Should be how many pieces and pieces would be what determines the amount of rows. 
//Add an add single row for mistakes or a remove row to remove a row from the rows.
// Cabinet Object -> Cabinet_object_array -> calulatePrice() -> return price total after doing the math for the square footage of the cabinets.


let table_for_cells = TableForCells()

console.log(table_for_cells)