document.addEventListener('DOMContentLoaded', function() {
    const promptForm = document.querySelector('#prompt-form');

    promptForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const title = document.querySelector('#title').value;
        const category = document.querySelector('#category').value;
        const prompt = document.querySelector('#prompt').value;
    
        // Send the prompt data to the backend server
        fetch('/savePrompt', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, category, prompt })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Prompt saved successfully:', data);
        })
        .catch(error => {
            console.error('Error saving prompt:', error);
            // Handle errors
        });
    });
});
    