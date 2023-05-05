let header = document.getElementById('header');
let mobileMenu = document.getElementById('mobile-menu');
let headerHeight = header.clientHeight;

// open-close menu 
mobileMenu.onclick = function () {
    let isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// auto-close when click element of menu 
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (const menuItem of menuItems) {
    let isMultilevelMenu = (menuItem.nextElementSibling && 
                        menuItem.nextElementSibling.classList.contains('subnav'));

    menuItem.onclick = function (event) {
        if (isMultilevelMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}