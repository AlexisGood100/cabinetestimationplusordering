const additionalHardWare = () =>{
let div_for_extra_hardware = document.createElement('div');
div_for_extra_hardware.classList.add('div-for-extra-hardware')
div_for_extra_hardware.classList.add('hide')
let h1_additonalHardware = document.createElement('h1');
h1_additonalHardware.innerText = 'Additional Hardware Costs';
div_for_extra_hardware.appendChild(h1_additonalHardware)
let div_for_hardware = document.createElement('div');
div_for_extra_hardware.appendChild(div_for_hardware);
let label_hinges_quantity = document.createElement('label');
label_hinges_quantity.innerText = `Total Hinges: 0`;
div_for_hardware.appendChild(label_hinges_quantity);
let label_screws_quantity = document.createElement('label');
label_screws_quantity.innerText = `Total Screws: 0`;
div_for_hardware.appendChild(label_screws_quantity);
let p_screw_price = document.createElement('p');
p_screw_price.innerText = `Screw Price: 0`
div_for_hardware.appendChild(p_screw_price);
let p_hinge_price = document.createElement('p');
p_hinge_price.innerText = 'Hinge Price: 0';
div_for_hardware.appendChild(p_hinge_price);
let label_pull = document.createElement('label')
label_pull.innerText = `Total Pulls: 0`;
div_for_hardware.appendChild(label_pull);
let p_pull_price = document.createElement('p');
p_pull_price.innerText = `Pull Price: 0`;
div_for_hardware.appendChild(p_pull_price)
return div_for_extra_hardware;
}





