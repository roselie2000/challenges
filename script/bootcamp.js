const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const slides = document.getElementsByClassName("slide")

// set initial slide
let slideIndex = 1


nextBtn.addEventListener("click", () => {
    clearSlides()

    // if end of slides go back to first slide
    if (slideIndex >= slides.length) {
        slideIndex = 1
    // else go to next slide
    } else {
        slideIndex ++ ;
    }
    showSlides(slideIndex)
})

prevBtn.addEventListener("click", () => {
    clearSlides()

    // if at start slides go to last slide
    if (slideIndex == 1) {
        slideIndex = slides.length
    // else go to previous slide 
    } else {
        slideIndex -- ;
    }
    showSlides()
})


// adds active state to current slide
function showSlides() {
    slides[slideIndex-1].classList.add('active')
}


// Clears current active state from slide
function clearSlides() {
    slides[slideIndex-1].classList.remove('active')
}

// show initial slide
showSlides(slideIndex);