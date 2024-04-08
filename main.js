//getting the root of the html file
const body = document.querySelector('body')
//returning the html from components
let additionalWork = {total:0}
let hardwareCosts = {total:0}

let html_Header = makeHeader();
let totalPrice = {total:0};
let allValuesForRowsArr = [];
let form = makeForm(totalPrice, allValuesForRowsArr, additionalWork);
let newMainForChoices = makeMainChoices();
let pricingSection = PricingArea();
//appending the html components to the root (body in this case)
body.appendChild(html_Header);
//additional work

let additionalHardwareSection = additionalHardWare()
document.querySelector('.div-additional-hardware').appendChild(additionalHardwareSection)
let divForWorkOrder = makeReusableGenericDiv('div-work-orders');

body.appendChild(divForWorkOrder);
// end of additional work 
body.appendChild(form);
body.appendChild(pricingSection);
body.appendChild(newMainForChoices);
//Checkboxes
let checkBoxContainer = makeReusableGenericDiv('div-checkbox');
let checkBoxInteriorPainting = makeCheckBox('extra-work', "Interior Painting: ", 0, 300, 'checkbox-interior-p', totalPrice, additionalWork);
let checkBoxWallBottoms = makeCheckBox('extra-work', "Wall Bottoms: ", 1, 150, 'checkbox-wall-b', totalPrice, additionalWork);
let checkBoxToeKick = makeCheckBox('extra-work', "Toe-Kick: ", 2, 50, 'checkbox-toekick', totalPrice, additionalWork);

newMainForChoices.appendChild(checkBoxInteriorPainting);
newMainForChoices.appendChild(checkBoxWallBottoms);
newMainForChoices.appendChild(checkBoxToeKick);
//end of checkboxes

body.appendChild(checkBoxContainer);
let pricingTable = document.querySelector('.pricing-table');
//Div for table cells
let divForTableCells = makeReusableGenericDiv('div-table-cells');
let tableForCells = TableForCells();
divForTableCells.appendChild(tableForCells);
body.appendChild(divForTableCells);
//End of div for table cells

let TK = false;
let IP = false;
let WBP = false;

//Additional hardware

document.querySelector('.arrow-additional-hardware').addEventListener('click', (e)=>{
    document.querySelector('.div-for-extra-hardware').classList.remove('hide');
    document.querySelector('.arrow-right').classList.remove('hide')
    document.querySelector('.arrow-left').classList.add('hide')
})
document.querySelector('.arrow-right').addEventListener('click', (e)=>{
    document.querySelector('.div-for-extra-hardware').classList.add('hide');
    document.querySelector('.arrow-right').classList.add('hide')
    document.querySelector('.arrow-left').classList.remove('hide')
})

let workOrder_ = null;
//End of additional hardware
document.querySelector('.generatePDF').addEventListener('click', async function() {
    // Assuming you have an object called 'data' with the values you want to print

    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage();

    page.drawText(`${workOrder_.Num}`, { x: 175, y: 725, size: 16 });
    // Create a new PDF document

 //Title of business
    const companyCredentials = "RioR - Reface instead of Replace.";
    page.drawText(companyCredentials, {
        x: 175,
        y: 750,
        size: 20,
    });

//work order date
    page.drawText(`Date: ${workOrder_.Date_}`, { x: 50, y: 750, size: 16 }); // The Date
    // Add Personal Information Section
    page.drawText("Customer Information", { x: 50, y: 700, size: 16 });
    const service_Completed = 
    `${workOrder_.PN}
     ${workOrder_.UN}
       `;
//end of customer information

//Services that are being completed.
    page.drawText(service_Completed, {
        x: 75,
        y: 675,
        size: 12,
    });
    console.log(service_Completed)


    page.drawText("Scope of Work", { x: 275, y: 700, size: 16 });

   const scopeOfWork = (IP, WBP, TK) => {
    let cabinetScopeOBJ = {
        cabinetRefacing : 'Refacing of Cabinets',
        interiorPainting: `Interior Painting: ${IP}`,
        wallBottomPainting: `Wall Bottom Painting: ${WBP}`,
        ToeKick: `Toe-Kick: ${TK}`,
    }
    return cabinetScopeOBJ;
    }


//scope of work and extra work
    let workOrderWorkScope = scopeOfWork(IP, WBP, TK)
    const scopeOfWorkPDF = 
    `
    ${workOrderWorkScope.interiorPainting}
    ${workOrderWorkScope.wallBottomPainting}
    ${workOrderWorkScope.ToeKick}
    `
    page.drawText(scopeOfWorkPDF, { x: 275, y: 715, size: 12 });
    //end of scope of work


    // Add Additional Sections as needed
    // page.drawText("Section Content", { x: 50, y: 600, size: 12 });

    // Generate a Blob from the PDF document
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(pdfBlob);
    link.download = 'generated.pdf';
    link.click();
});