function TableForCells(){
let table = document.createElement('table');
table.classList.add('table-for-cells')
let tr1 = document.createElement('tr');
let th_width = document.createElement('th');
th_width.innerText = 'Width'
let th_height = document.createElement('th');
th_height.innerText = 'Height'
let th_opening_width = document.createElement('th');
th_opening_width.innerText = 'Opening Width'
let th_opening_height = document.createElement('th');
th_opening_height.innerText = 'Opening Height'
let th_square_footage = document.createElement('th');
th_square_footage.innerText = 'SQR FTGE'
let unit_price = document.createElement('th');
unit_price.innerText = 'Unit Price'
tr1.appendChild(th_width);
tr1.appendChild(th_height);
tr1.appendChild(th_opening_width);
tr1.appendChild(th_opening_height);
tr1.appendChild(th_square_footage);
tr1.appendChild(unit_price);
table.appendChild(tr1);
return table;
};