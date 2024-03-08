// Function to fetch a random cat fact from the API
function fetchCatFact() {
    // Fetching data from the Catfact Ninja API
    fetch('https://catfact.ninja/facts?limit=5&max_length=140') // Change limit to 5 for example
        .then(response => response.json()) // Parsing the JSON response
        .then(data => {
            // Accessing the array of cat facts from the API response
            const catFacts = data.data;
            // Selecting a random fact from the array
            const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
            // Displaying the random fact as text in the H1 element
            document.getElementById('cat-fact').textContent = randomFact.fact;
        })
        .catch(error => console.error('Error fetching cat facts:', error));
}

// Adding event listener to the button to trigger fetchCatFact function
document.getElementById('fetch-cat-fact-button').addEventListener('click', fetchCatFact);