$(document).ready(function () {

    // Define the menu we are working with
    var menu = $('.navbar');
    var aboutme = $('.aboutme');

    // Get the menus current offset
    var origOffsetY = menu.offset().top-88.88;


    function scroll() {

        // Check the menus offset. 
        if ($(window).scrollTop() >= origOffsetY) {

            //If it is beyond the offset, fix it to the top.
            $(menu).removeClass('nav-scroll');
            $(menu).addClass('fixed-top');

        } else {

            // Otherwise, don't fix it.
            $(menu).addClass('nav-scroll');
            $(menu).removeClass('fixed-top');

        }
    }

    // Anytime the document is scrolled act on it
    document.onscroll = scroll;

});