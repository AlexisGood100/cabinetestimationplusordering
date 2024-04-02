function updatePricingForExtraWork(total){
    let tableDvAll = document.querySelectorAll('.pricing-table td');
    tableDvAll[0].innerText = total.total * 1.5
    tableDvAll[1].innerText = total.total * 1.4
    tableDvAll[2].innerText = total.total * 1.3
    tableDvAll[3].innerText = total.total * 1.2
}