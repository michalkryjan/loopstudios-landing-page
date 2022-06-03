const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("fadeIn");
            }
        } 
    })
});

const elementsToFadeIn = document.querySelectorAll('.toSlowFadeIn, .toFastFadeIn');

elementsToFadeIn.forEach((elem) => {
    observer.observe(elem);
});
