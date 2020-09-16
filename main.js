$(document).ready(function () {
    new WOW().init();

    $('#header, .top-info').ripples({
        resulation: 5102,
        dropRadius: 50,
        perturbance: 0.0000000004,
    });

    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true,
        },
    });

    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change');
    });

    $('.sticky-top').sticky({ topSpacing: 0, zIndex: 500 });

    $('.nav-item a, .down-icon a, .upper_icon a').smoothScroll({
        duration: 2000,
        easing: 'swing',
        offset: 0,
    });
});
