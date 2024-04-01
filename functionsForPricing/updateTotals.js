function updatePricingForExtraWork(total){
    let tableDvAll = document.querySelectorAll('.pricing-table td');
    tableDvAll[0].innerText = total.total
    tableDvAll[1].innerText = total.total
    tableDvAll[2].innerText = total.total
    tableDvAll[3].innerText = total.total
    tableDvAll[4].innerText = total.total
}