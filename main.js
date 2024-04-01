const body = document.querySelector('body')
//returning the html from components
let html_Header = makeHeader();
let form = makeForm();
let newMainForChoices = makeMainChoices();
//appending the html components to the root (body in this case)
body.appendChild(html_Header);
body.appendChild(form);
body.appendChild(newMainForChoices);



let checkBoxContainer = makeReusableGenericDiv('div-checkbox')


let checkBoxInteriorPainting = makeCheckBox('extra-work', "Interior Painting: ", 0, 300)
let checkBoxWallBottoms = makeCheckBox('extra-work', "Wall Bottoms: ", 1, 150)
let checkBoxToeKick = makeCheckBox('extra-work', "Toe-Kick: ", 2, 50)

checkBoxContainer.appendChild(checkBoxInteriorPainting);
checkBoxContainer.appendChild(checkBoxWallBottoms);
checkBoxContainer.appendChild(checkBoxToeKick);
body.appendChild(checkBoxContainer);