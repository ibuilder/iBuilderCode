// JavaScript code for interactive features on the iBuilder Code website

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const contactForm = document.getElementById('contact-form');
    const formErrorMessage = document.getElementById('form-error-message');
    const currentYearSpan = document.getElementById('current-year');

    // --- Theme Toggling ---
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            let theme = 'light';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }

    // --- Basic Form Validation ---
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Basic check if fields are empty - enhance as needed
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                event.preventDefault(); // Stop form submission
                if (formErrorMessage) {
                    formErrorMessage.classList.remove('d-none'); // Show error message
                    formErrorMessage.textContent = 'Please fill out all fields.';
                }
            } else {
                 if (formErrorMessage) {
                    formErrorMessage.classList.add('d-none'); // Hide error message
                 }
                 // If using mailto:, submission proceeds. If using JS submission (e.g., fetch to an API), handle it here.
                 console.log('Form seems valid. Proceeding with submission (or JS handling)...');
            }
        });
    }

    // --- Update Copyright Year ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});