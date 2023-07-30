document.addEventListener('DOMContentLoaded', function() {
    const crawlSection = document.querySelector('#crawl-section');
    const runButton = document.querySelector('#run-button');
    const promptSelection = document.querySelector('#prompt-selection');

    // Example of prompts in the user's library
    const prompts = [
        { value: 'prompt1', text: 'Prompt 1' },
        { value: 'prompt2', text: 'Prompt 2' },
        { value: 'prompt3', text: 'Prompt 3' },
        // Add more prompts as needed
        ];
    
        // Populate the prompt selection dropdown with prompts from the user's library
        prompts.forEach(prompt => {
        const option = document.createElement('option');
        option.value = prompt.value;
        option.textContent = prompt.text;
        promptSelection.appendChild(option);
        });
    
        runButton.addEventListener('click', function() {
        // Get the selected website, prompts, and output format
        const targetWebsite = document.querySelector('#target-website').value;
        const selectedPrompts = Array.from(promptSelection.selectedOptions).map(option => option.textContent);
        const outputFormat = document.querySelector('#output-format').value;
    
        const outputSection = document.querySelector('#output-section');
        outputSection.innerHTML = `
            <h2>Output Results</h2>
            <p>Target Website: ${targetWebsite}</p>
            <p>Selected Prompts: ${selectedPrompts.join(', ')}</p>
            <p>Output Format: ${outputFormat}</p>
        `;
    });
});