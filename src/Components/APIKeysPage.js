document.addEventListener('DOMContentLoaded', function() {
    const apiKeyForm = document.querySelector('#api-key-form');

    apiKeyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get API keys from input fields
        const chatgptApiKey = document.querySelector('#chatgpt-key').value;
        const notionApiKey = document.querySelector('#notion-key').value;
        const googleDocsApiKey = document.querySelector('#google-docs-key').value;
        const capacitiesApiKey = document.querySelector('#capacities-key').value;
    
        // Save the API keys to local storage (you can use a more secure storage method in production)
        localStorage.setItem('chatgptApiKey', chatgptApiKey);
        localStorage.setItem('notionApiKey', notionApiKey);
        localStorage.setItem('googleDocsApiKey', googleDocsApiKey);
        localStorage.setItem('capacitiesApiKey', capacitiesApiKey);
    
        // You can perform additional actions like displaying a success message, etc.
        console.log('API keys saved successfully!');
    });
});
    