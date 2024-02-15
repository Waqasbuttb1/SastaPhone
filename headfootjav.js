document.addEventListener('DOMContentLoaded', function() {
    // Fetch and insert header
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching header: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => document.getElementById('header-placeholder').innerHTML = data)
        .catch(error => console.error(error));

    // Fetch and insert footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching footer: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => document.getElementById('footer-placeholder').innerHTML = data)
        .catch(error => console.error(error));
});
