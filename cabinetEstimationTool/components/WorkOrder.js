function createWorkOrderDisplay(workOrder){
    let divWorkOrder = document.createElement('div');
    divWorkOrder.classList.add('div-work-order-inside')
    let p_WO_Num = document.createElement('p');
    let p_WO_UN = document.createElement('p');
    let p_WO_PN = document.createElement('p');
    let p_WO_Color = document.createElement('p');
    let p_WO_Date = document.createElement('p');
    let p_WO_Quan = document.createElement('p');
    let p_WO_HO = document.createElement('p');
    divWorkOrder.appendChild(p_WO_Num);
    p_WO_Num.innerText = workOrder.Num
    divWorkOrder.appendChild(p_WO_PN);
      p_WO_PN.innerText = workOrder.PN
    divWorkOrder.appendChild(p_WO_UN);
      p_WO_UN.innerText = workOrder.UN
      divWorkOrder.appendChild(p_WO_Color);
      p_WO_Color.innerText = workOrder.color;
    divWorkOrder.appendChild(p_WO_Date);
      p_WO_Date.innerText = workOrder.Date_
    divWorkOrder.appendChild(p_WO_Quan);
      p_WO_Quan.innerText = workOrder.Quan
    divWorkOrder.appendChild(p_WO_HO);
      p_WO_HO.innerText = workOrder.HO
    return divWorkOrder;
}