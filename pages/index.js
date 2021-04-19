const menu = document.querySelector('.header__menu-icon');
const close = document.querySelector('.navigation__icon');
const navigation = document.querySelector('.navigation');

if (window.innerWidth < 1200) {
    menu.addEventListener("click", handleMenuClick);
}

window.addEventListener("resize", handleResize);

function handleResize() {
    if (window.innerWidth < 1200) {
        menu.addEventListener("click", handleMenuClick);
    }

    return () => window.removeEventListener("resize", handleResize);
}

function handleMenuClick(){
        navigation.classList.add('navigation_mob_enabled');
        close.addEventListener("click", handleCloseClick);
        menu.removeEventListener("click", handleMenuClick);
}


function handleCloseClick(){
    navigation.classList.remove('navigation_mob_enabled');
    close.removeEventListener("click", handleCloseClick);
    menu.addEventListener("click", handleMenuClick);
}