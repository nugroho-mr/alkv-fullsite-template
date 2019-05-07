jQuery(function($) {

    $(document).ready(function() {

        // Mobile Menu
        $('.mobile_menu--button_container--col .circle').click(function() {
            if( $(this).find('.burger-icon').hasClass('active') ) {
                $(this).find('.burger-icon').removeClass('active');
                $('.nav_menu--col').slideUp();
            } else {
                $(this).find('.burger-icon').addClass('active');
                $('.nav_menu--col').slideDown();
            }
        });

        // Hero Slider
        $('#hero--slider').owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '&#8592;',
                '&#8594;'
            ],
            
        });

    })

});