

// Checks if ABOUT is clicked
$(".about-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to about me element
    $('html, body').animate({
        scrollTop: $(".aboutme").offset().top - 87
    }, 1000);
})
// Checks if PROJECTS is clicked
$(".projects-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to portfolio element
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000);
})
// Checks if CONTACT is clicked
$(".contact-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to contact element
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 87
    }, 1000);
})

// Checks if HOME is clicked
$(".home-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to contact element
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})

