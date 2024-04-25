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
                <td>${location.cabinetType}</td>
                <td>${location.cabinetColor}</td>
                <td>${location.hingeOverlay}</td>
                <td>${location.pullType}</td>
                <td>${location.pullSize}</td>
                <td>${location.locationName}</td>
            `;
        });

        alert('Locations fetched and displayed successfully!');
    } catch (error) {
        console.error('Failed to fetch locations:', error);
        alert('Failed to fetch locations: ' + error.message);
    }
};
