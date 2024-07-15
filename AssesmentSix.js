// URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch data from the API
function fetchData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the fetched data
            console.log('Fetched data:', data);
            displayUsers(data); // Example function to display data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Example function to display fetched data (for demonstration purposes)
function displayUsers(users) {
    // Assuming users is an array of user objects
    users.forEach(user => {
        console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
}

// Call the fetchData function to initiate the fetch operation
fetchData();
