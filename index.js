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
    const link = item.querySelector("a");
    const submenu = item.querySelector(".submenu");
    
    if (submenu) {
        link.addEventListener('click', (e) => {
            // Only toggle on mobile
            if (window.innerWidth <= 500) {
                e.preventDefault();
                submenu.classList.toggle("open");
                
                // Close other submenus at same level
                navItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherSubmenu = otherItem.querySelector(".submenu");
                        if (otherSubmenu && !otherSubmenu.querySelector(".submenu.open")) {
                            otherSubmenu.classList.remove("open");
                        }
                    }
                });
            }
        });
    }
});

// Handle nested submenu clicks on mobile
const allSubmenuItems = document.querySelectorAll(".submenu li");

allSubmenuItems.forEach(item => {
    const link = item.querySelector("a");
    const nestedSubmenu = item.querySelector(".submenu");
    
    if (nestedSubmenu) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 500) {
                e.preventDefault();
                nestedSubmenu.classList.toggle("open");
                
                // Close other nested submenus at same level
                const parentSubmenu = item.parentElement;
                parentSubmenu.querySelectorAll(":scope > li > .submenu").forEach(menu => {
                    if (menu !== nestedSubmenu) {
                        menu.classList.remove("open");
                    }
                });
            }
        });
    }
});

// Close menus on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        document.querySelectorAll(".submenu.open").forEach(m => m.classList.remove("open"));
    }
});
