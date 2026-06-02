const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links > li");

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

// Mobile submenu functionality
if (window.innerWidth <= 500) {
    // Main menu items with submenus
    const mainMenuItems = document.querySelectorAll(".nav-links > li > a");
    
    mainMenuItems.forEach(link => {
        const parentLi = link.parentElement;
        const submenu = parentLi.querySelector(".submenu");
        
        if (submenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 500) {
                    e.preventDefault();
                    
                    // Close other main menus
                    document.querySelectorAll(".nav-links > li .submenu.open").forEach(menu => {
                        if (menu !== submenu) {
                            menu.classList.remove('open');
                        }
                    });
                    
                    submenu.classList.toggle('open');
                }
            });
        }
    });
    
    // Nested submenu items
    const nestedMenuItems = document.querySelectorAll(".submenu > li > a");
    
    nestedMenuItems.forEach(link => {
        const parentLi = link.parentElement;
        const nestedSubmenu = parentLi.querySelector(".submenu");
        
        if (nestedSubmenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 500) {
                    e.preventDefault();
                    
                    // Close other nested menus at same level
                    const parentSubmenu = parentLi.parentElement;
                    parentSubmenu.querySelectorAll(".submenu.open").forEach(menu => {
                        if (menu !== nestedSubmenu) {
                            menu.classList.remove('open');
                        }
                    });
                    
                    nestedSubmenu.classList.toggle('open');
                }
            });
        }
    });
}

// Update on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        // Remove all open classes when resizing to desktop
        document.querySelectorAll(".submenu.open").forEach(menu => {
            menu.classList.remove('open');
        });
    }
});
