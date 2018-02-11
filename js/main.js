$(document).ready(function() {
    // prevent logo from obscuring navigation
    $('.navbar-toggler-icon').click(function() {
        console.log('navbar icon clicked');
        $('.logo').toggle(); // should logo be shown or hidden
    });
});