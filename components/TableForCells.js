function TableForCells(){
let table = document.createElement('table');
table.classList.add('table-for-cells')
let tr1 = document.createElement('tr');
let th_type = document.createElement('th')
th_type.innerText = 'Type'
let th_width = document.createElement('th');
th_width.innerText = 'Width'
let th_height = document.createElement('th');
th_height.innerText = 'Height'
let th_opening_width = document.createElement('th');
th_opening_width.innerText = 'Opening Width'
let th_opening_height = document.createElement('th');
th_opening_height.innerText = 'Opening Height'
let div = document.createElement('div')
let th_square_footage = document.createElement('th');
th_square_footage.classList.add('square-footage')
th_square_footage.innerText = 'SQR FTGE'
let unit_price = document.createElement('th');
unit_price.classList.add('unit-price-th')
unit_price.innerText = 'Unit Price'
let button_continue = document.createElement('button');
button_continue.classList.add('generatePDF')
button_continue.innerText = 'Generate Form.'
button_continue.classList.add('button-continue');
let th_hingeOverlay_w = document.createElement('th');
th_hingeOverlay_w.innerText = 'Width Overlay';
let th_hingeOverlay_h = document.createElement('th');
th_hingeOverlay_h.innerText = 'Height Overlay';




tr1.appendChild(th_type);
tr1.appendChild(th_width);
tr1.appendChild(th_height);
tr1.appendChild(th_opening_width);
tr1.appendChild(th_opening_height);
div.appendChild(th_square_footage);
div.appendChild(unit_price);
div.appendChild(th_hingeOverlay_w)
div.appendChild(th_hingeOverlay_h)

div.appendChild(button_continue)
tr1.appendChild(div);
table.appendChild(tr1);
return table;
};