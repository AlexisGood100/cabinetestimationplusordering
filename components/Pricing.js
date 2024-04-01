function PricingArea(){
    let div = document.createElement('div');
    let h1_pricing = document.createElement('h1');
    h1_pricing.innerText = 'Tier Pricing';
    let pricing_table = document.createElement('table') 
    pricing_table.classList.add('pricing-table')
    let pricing_td = document.createElement('td')
    let pricing_th = document.createElement('th')
    let pricing_td2 = document.createElement('td')
    let pricing_th2 = document.createElement('th')
    let pricing_td3 = document.createElement('td')
    let pricing_th3 = document.createElement('th')
    let pricing_td4 = document.createElement('td')
    let pricing_th4 = document.createElement('th')
    let pricing_td5 = document.createElement('td')
    let pricing_th5 = document.createElement('th')
    

    let pricing_tr_for_th = document.createElement('tr');
    let pricing_tr_for_td = document.createElement('tr');

    div.appendChild(h1_pricing)
    div.appendChild(pricing_table)
    pricing_table.appendChild(pricing_tr_for_th)
    pricing_tr_for_th.appendChild(pricing_th);
    pricing_tr_for_th.appendChild(pricing_th2);
    pricing_tr_for_th.appendChild(pricing_th3);
    pricing_tr_for_th.appendChild(pricing_th4);
    pricing_tr_for_th.appendChild(pricing_th5);

    pricing_table.appendChild(pricing_tr_for_td)
    pricing_tr_for_td.appendChild(pricing_td)
    pricing_tr_for_td.appendChild(pricing_td2)
    pricing_tr_for_td.appendChild(pricing_td3)
    pricing_tr_for_td.appendChild(pricing_td4)
    pricing_tr_for_td.appendChild(pricing_td5)

    pricing_th.innerText = 'Tier 1';
    pricing_td.innerText = `$${0}`;
    pricing_th2.innerText = 'Tier 2';
    pricing_td2.innerText = `$${0}`
    pricing_th3.innerText = 'Tier 3';
    pricing_td3.innerText = `$${0}`
    pricing_th4.innerText = 'Tier 4';
    pricing_td4.innerText = `$${0}`
    pricing_th5.innerText = 'Total'
    pricing_td5.innerText = `$${0}`


    return div;

}