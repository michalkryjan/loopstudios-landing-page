const swipedetect = (el, callback) => {
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 80,
    restraint = 100,
    allowedTime = 1000,
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        let touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime()
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX
        distY = touchobj.pageY - startY
        elapsedTime = new Date().getTime() - startTime
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                swipedir = (distX < 0)? 'left' : 'right'
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                swipedir = (distY < 0)? 'up' : 'down'
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}


const topMenu = document.getElementsByClassName("menu--header")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];

const topMenuHandlerMobile = () => {
    hamburger.classList.toggle('opened');
    let isOpened = hamburger.classList.contains('opened');
    hamburger.setAttribute('aria-expanded', isOpened);
    if (isOpened) {
        topMenu.style.right = '0';
    }
    else {
        topMenu.style.right = '-100%';
    }
}

hamburger.addEventListener('click', topMenuHandlerMobile, false);

if (window.innerWidth <= 768) {
    swipedetect(topMenu, function(swipedir){
        if (swipedir == "right") {
            topMenuOpenerMobile();
        }
    });
}

const menuBar = document.getElementsByClassName("topMenuBar")[0];

window.onscroll = (e) => {
    if (this.oldScroll < this.scrollY) {
        menuBar.style.transform = 'translateY(-100%)';
    }
    else if (this.oldScroll > this.scrollY) {
        menuBar.style.transform = 'translateY(0)';
        menuBar.style.background = '#000';
    }
    this.oldScroll = this.scrollY;
    if (window.pageYOffset == 0) {
        menuBar.style.background = 'transparent';
    } 
}
