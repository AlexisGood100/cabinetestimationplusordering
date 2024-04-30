//excel file for uploading what the customer is ordering
let cabinets = []; // Define an empty array to store cabinet objects globally

function readExcelFile() {
    const input = document.getElementById('excelFile');
    if (input.files.length === 0) {
        alert('Please select an Excel file.');
        return;
    }
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        // Transform jsonData into cabinet objects and store in the global cabinets array
        
        cabinets = jsonData.map(row => ({
            type: row.Type,
            width: row.Width,    // Make sure the property names match exactly with your Excel headers
            height: row.Height,
            color: row.Color,
        }));
        // document.getElementById('output').textContent = JSON.stringify(cabinets, null, 2);
        // Optional: Store the array of cabinet objects in localStorage
        displayCabinetOrder(cabinets, document.querySelector('.div-cabinet-csv-order'));
    };

    reader.onerror = function() {
        alert('Failed to read file');
    };

    reader.readAsArrayBuffer(file);
}
