$(document).ready(function() {
    // prevent jump to links from scrolling past headline
    window.addEventListener('hashchange', function() {
        window.scrollTo(window.scrollX, window.scrollY - 80);
    });

    // collapse navbar when user clicks on a nav link
    $('.nav-link').on('click',function() {
        $('.navbar-collapse').collapse('hide');
    });
});