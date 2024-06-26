//getting the root of the html file
const body = document.querySelector('body')
//returning the html from components
let additionalWork = {total:0}
let hardwareCosts = {total:0}

let html_Header = makeHeader();
let totalPrice = {total:0};
let allValuesForRowsArr = [];
let cabinetArray = [];
let arrayOfTypes = [];
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
let numOfScrews = 0;
let numOfPulls = 0;
let numOfHinges = 0;
let hingeType = null;
let globalColor = null;
let numOfPieces = 0;
let numOfFF = 0;
let numOfDoor = 0;
let numOfDrawer = 0;
let hingeOverlay = 0;
//Additional hardware
let allWidths = [];
let allHeights = [];
let workOrder_ = null;
let choosenTier = null;
let i = 0;
//End of additional hardware
document.querySelector('.generatePDF').addEventListener('click', async function() {
    // Assuming you have an object called 'data' with the values you want to print

i+=1
    //getting all heights and all widths of cabinets and putting them into arrays   
        CollectTypeOfCabinetAll(arrayOfTypes)
        allWidths_(allWidths)
        allHeights_(allHeights)
        makeCabinetObject(allHeights, allWidths, cabinetArray, globalColor)
        
//end of width and height of cabinets (cabinet objects all)


    
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage();

    page.drawText(`${workOrder_.Num}`, { x: 10, y: 725, size: 16 });
    // Create a new PDF document

 //Title of business
    const companyCredentials = "RioR";
    page.drawText(companyCredentials, {
        x: 255,
        y: 785,
        size: 20,
    });
    // - Reface instead of Replace.
    const companyName = "(Reface instead of Replace)";
    page.drawText(companyName, {
        x: 175,
        y: 760,
        size: 20,
    });

//work order date
    page.drawText(`${workOrder_.Date_}`, { x: 10, y: 750, size: 16 }); // The Date
    // Add Personal Information Section
    page.drawText("Customer Information", { x: 50, y: 650, size: 16 });
    const service_Completed = 
    `${workOrder_.PN}
     ${workOrder_.UN}
       `;
//end of customer information

//Services that are being completed.
    page.drawText(service_Completed, {
        x: 75,
        y: 600,
        size: 12,
    });
    console.log(service_Completed)
    page.drawText("Scope of Work", { x: 325, y: 650, size: 16 });
//scope of work and extra work
    let workOrderWorkScope = scopeOfWork(IP, WBP, TK)
    const scopeOfWorkPDF = 
    `
    ${workOrderWorkScope.interiorPainting}
    ${workOrderWorkScope.wallBottomPainting}
    ${workOrderWorkScope.ToeKick}
    `
    page.drawText(scopeOfWorkPDF, { x: 325, y: 635, size: 12 });
    //end of scope of work
//experiment
const jpgImageBytes = await fetch('jsDragon.jpg').then((res) => res.arrayBuffer());
 // Embed the PNG image into the PDF document
 const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);

 // Get the width and height of the PNG image
 const { width, height } = jpgImage.scale(1);

 // Draw the embedded image onto the PDF page
 page.drawImage(jpgImage, {
     x: 0, // X coordinate of the top-left corner of the image
     y: 770, // Y coordinate of the top-left corner of the image
     width: width * 0.5, // Scale the width of the image
     height: height * 0.5, // Scale the height of the image
 });

 //Specifics
 const workSpecifics = 
 `
 Refacing Details
 Hinge Overlay: ${hingeOverlay}
 Color: ${workOrder_.color}
 ${workOrder_.Quan} - $${numOfPieces * 40}
 # of False Fronts:${numOfFF}
 # of Doors: ${numOfDoor}
 # of Drawers: ${numOfDrawer}
 # of Screws: ${numOfScrews} - $${(numOfScrews * .50).toFixed(2)}
 # of Hinges: ${numOfHinges} - $${(numOfHinges * 1.14).toFixed(2)}
 # of Pulls: ${numOfPulls} - $${(numOfPulls * 1.69).toFixed(2)}
 Total: ${totalPrice.total}
 `
 page.drawText(workSpecifics, { x: 25, y: 500, size: 12 });
//end of work specifics



//end of experiment

    // Add Additional Sections as needed
    // page.drawText("Section Content", { x: 50, y: 600, size: 12 });

    // Generate a Blob from the PDF document
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(pdfBlob);
    link.download = `generated pdf ${i}`;
    link.click();
    //End of PDF part


    // ---------------------------------------------------
    //Start of Excel sheet part


    // Convert data to worksheet
    var worksheet = XLSX.utils.json_to_sheet(cabinetArray);

    // Create workbook
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `sheet${i}`);

    // Save workbook to file
    XLSX.writeFile(workbook, 'output.xlsx');
});


