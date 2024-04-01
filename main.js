const body = document.querySelector('body')
//returning the html from components
let html_Header = makeHeader();
let form = makeForm();
let newMainForChoices = makeMainChoices();
let pricingSection = PricingArea();
//appending the html components to the root (body in this case)
body.appendChild(html_Header);
body.appendChild(form);
body.appendChild(pricingSection)
body.appendChild(newMainForChoices);



let checkBoxContainer = makeReusableGenericDiv('div-checkbox')

let totalPrice = {total:0}

let checkBoxInteriorPainting = makeCheckBox('extra-work', "Interior Painting: ", 0, 300, 'checkbox-interior-p', totalPrice)
let checkBoxWallBottoms = makeCheckBox('extra-work', "Wall Bottoms: ", 1, 150, 'checkbox-wall-b', totalPrice)
let checkBoxToeKick = makeCheckBox('extra-work', "Toe-Kick: ", 2, 50, 'checkbox-toekick', totalPrice)
newMainForChoices.appendChild(checkBoxInteriorPainting);
newMainForChoices.appendChild(checkBoxWallBottoms);
newMainForChoices.appendChild(checkBoxToeKick);

body.appendChild(checkBoxContainer);
let pricingTable = document.querySelector('.pricing-table')
