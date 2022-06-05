document.onreadystatechange = setTimeout(() => {
    let preloader = document.querySelector("#preloader");
    let preloader__logo = document.querySelector(".preloader__logo");
    let preloader__svg = document.querySelector(".preloader__svg");

    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        preloader.style.visibility = "visible";
    } else {
        preloader.style.opacity = "0";
        preloader__logo.style.opacity = "0";
        preloader__svg.style.opacity = "0";
        document.querySelector("body").style.visibility = "visible";
        setTimeout(function() {
            preloader.remove();
        }, 2000);
    }
}, 1200)
