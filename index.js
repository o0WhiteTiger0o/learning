// Simple script for basic animations if needed
// The checkbox-based approach handles most functionality via CSS

// Optional: Close menu when a link is clicked on mobile
const navLinks = document.querySelectorAll('.menu a');
const dropCheckbox = document.getElementById('drop');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close on mobile
        if (window.innerWidth <= 500) {
            dropCheckbox.checked = false;
        }
    });
});
