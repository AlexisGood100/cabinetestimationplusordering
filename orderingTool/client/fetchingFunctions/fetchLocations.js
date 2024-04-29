//Location Fetch Display.
// Function to fetch and display locations in a table
async function fetchAndDisplayLocations() {
    try {
        const response = await fetch('http://localhost:3000/locations'); // Replace '/locations' with your actual endpoint to fetch locations
        if (!response.ok) {
            throw new Error('Failed to fetch locations');
        }
        const locations = await response.json();
        
        // Get reference to the table body
        const locationBody = document.getElementById('locationBody')
        
        // Clear existing table rows
        locationBody.innerHTML = '';

        // Iterate over locations array and populate table rows
        locations.forEach(location => {
            const newRow = locationBody.insertRow();
            newRow.innerHTML = `
                <td>${location.locationName}</td>
                <td>${location.cabinetType}</td>
                <td>${location.cabinetColor}</td>
                <td>${location.hingeOverlay}</td>
                <td>${location.pullType}</td>
                <td>${location.pullSize}</td>
                `;
                newRow.addEventListener('click', ()=>{
                    accountSubmissionObj.locationName = location.locationName
                    accountSubmissionObj.cabinetType = location.cabinetType
                    accountSubmissionObj.cabinetColor = location.cabinetColor
                    accountSubmissionObj.hingeOverlay = location.hingeOverlay
                    accountSubmissionObj.pullType = location.pullType
                    accountSubmissionObj.pullSize = location.pullSize
                    
                    document.querySelector('.section-table-locations').classList.add('hide');
                    let spanLocationsAll = document.querySelectorAll('.span-location-information');
                    console.log(spanLocationsAll)
                    spanLocationsAll[0].innerText = location.locationName
                    spanLocationsAll[1].innerText = location.cabinetType
                    spanLocationsAll[2].innerText = location.cabinetColor
                    spanLocationsAll[3].innerText = location.hingeOverlay
                    spanLocationsAll[4].innerText = location.pullType
                    spanLocationsAll[5].innerText = location.pullSize
                    document.querySelector('.section-div-open-location-order').classList.remove('hide')
                })
        });
        // document.querySelector('.section-div-open-location-order').classList.remove('hide');
        document.querySelector('.section-table-locations').classList.remove('hide');
        alert('Locations fetched and displayed successfully!');
    } catch (error) {
        console.error('Failed to fetch locations:', error);
        alert('Failed to fetch locations: ' + error.message);
    }
};
