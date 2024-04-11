function updatePricingForExtraWork(total){
    let tableDvAll = document.querySelectorAll('.pricing-table td');
    let total1 = total.total *  1.5
    let total2 = total.total * 1.4
    let total3 = total.total * 1.3
    let total4 = total.total * 1.2

    

    tableDvAll[0].innerText = total1.toFixed(1)
    tableDvAll[1].innerText = total2.toFixed(1)
    tableDvAll[2].innerText = total3.toFixed(1)
    tableDvAll[3].innerText = total4.toFixed(1)
}