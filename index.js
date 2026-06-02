const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links > li");

hamburger.addEventListener('click', () => {
    // Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Mobile submenu toggle
const navItems = document.querySelectorAll(".nav-links > li");

navItems.forEach(item => {
    const submenu = item.querySelector(".submenu");
    const link = item.querySelector("a");
    
    if (submenu) {
        link.addEventListener('click', (e) => {
            // Only toggle on mobile
            if (window.innerWidth <= 500) {
                e.preventDefault();
                submenu.classList.toggle("open");
                
                // Close other submenus
                navItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherSubmenu = otherItem.querySelector(".submenu");
                        if (otherSubmenu) {
                            otherSubmenu.classList.remove("open");
                        }
                    }
                });
            }
        });
    }
});

// Close menus on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        document.querySelectorAll(".submenu").forEach(m => m.classList.remove("open"));
    }
});
