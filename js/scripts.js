jQuery(function($) {

    $(window).on('load',function() {

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

        // Smooth Scroll

        $(".smooth_button").click(function(e) {
            e.preventDefault();
            if( $(window).width() <= 767 ) {
                $('.mobile_menu--button_container--col .circle').trigger('click');
            }
            var seconds = Math.abs($($(this).data('anchor')).offset().top - $(window).scrollTop());
            $('html, body').animate({
                scrollTop: $($(this).data('anchor')).offset().top-120
            }, seconds);
        });

        // Hero Slider
        $('#hero--slider').owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '&#8592;',
                '&#8594;'
            ],
            autoplay: true,
            loop: true            
        });

        // Video Popup
        $('.video-gallery').lightGallery({
            controls: false,
            counter: false,
            zoom: false
        });

        // Instagram Feed
        $('#instagram--carousel').owlCarousel({
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                680: {
                    items: 2,
                    margin: 30,
                },
                980: {
                    items: 3,
                    margin:30
                }
            }
        });
    
    });

});