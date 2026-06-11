/**
 * Theme Toggle Logic
 */
function toggleTheme() {
    const body = document.body;
    // Check if the body has the dark-mode class and toggle it
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Check and apply theme on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    }
    // Default behavior: If LocalStorage is not set, default to light mode
});