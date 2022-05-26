const hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener('click', function() {
    this.classList.toggle('opened');
    let isOpened = this.classList.contains('opened');
    this.setAttribute('aria-expanded', isOpened);
    if (isOpened) {
        showMenu();
    }
    else {
        hideMenu();
    }
});

const topMenu = document.getElementsByClassName('menu--header')[0];

const showMenu = () => {    
    topMenu.style.right = '0%';
}

const hideMenu = () => {
    topMenu.style.right = '-100%';
}
