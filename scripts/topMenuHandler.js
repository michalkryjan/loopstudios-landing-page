const topMenu = $(".menu--header");
const hamburger = $(".hamburger");

const topMenuHandler = () => {
    hamburger.toggleClass('opened');
    let isOpened = hamburger.hasClass('opened');
    hamburger.attr('aria-expanded', isOpened);
    if (isOpened) {
        topMenu.css('right', '0');
    }
    else {
        topMenu.css('right', '-100vw');
    }
}

hamburger.on('click', topMenuHandler);
