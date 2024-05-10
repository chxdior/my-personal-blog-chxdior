
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('mode-toggle');

    // Check if dark mode is enabled in localStorage
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    
    // Apply dark mode if it was enabled
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkModeEnabled', 'false');
        }
    });
});
