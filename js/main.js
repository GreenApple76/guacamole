$(document).ready(function() {
    // prevent logo from obscuring navigation
    $('.navbar-toggler-icon').click(function() {
        console.log('navbar icon clicked');
        $('.logo').toggle(); // should logo be shown or hidden
    });

    // prevent jump to links from scrolling past headline
    window.addEventListener('hashchange', function() {
        window.scrollTo(window.scrollX, window.scrollY - 80);
    });
});