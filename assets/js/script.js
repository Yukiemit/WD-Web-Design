const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        modeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        modeToggleButton.textContent = 'Switch to Dark Mode';
    }
});