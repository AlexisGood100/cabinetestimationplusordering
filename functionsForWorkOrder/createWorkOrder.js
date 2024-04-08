function createWorkOrder(input1, input2, input3, input4, input5, input6){
    let workOrder = {
      PN: `Property Name:${input1.value}`,
      UN: `Unit Number: ${input2.value}`,
      color: `Color: ${input3.value}`,
      Date_:`Date: ${input4.value}`,
      Quan:`Cabinet Total: ${input5.value}`,
      HO: `Hinge Overlay: ${input6.value}`,
      Num: `Work Order #: ${Math.floor(Math.random() * 5000) + 50000}`
    };

    return workOrder;
}//left off after making these functions need to check for errors and stuff 

