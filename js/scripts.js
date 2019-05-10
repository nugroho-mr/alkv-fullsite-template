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

        // Blog Archives

        var itemSelector = '.blog--item'

        var $container = $('#blog_archives--list').isotope({
            itemSelector: itemSelector
        });

        var responsiveIsotope = [
            [480, 4],
            [720, 6]
        ];
    
        var itemsPerPageDefault = 2;
        var itemsPerPage = defineItemsPerPage();
        var currentNumberPages = 1;
        var currentPage = 1;
        var currentFilter = '*';
        var filterAtribute = 'data-filter';
        var pageAtribute = 'data-page';
        var pagerClass = 'isotope-pager';
    
        function changeFilter(selector) {
            console.log(selector);
            $container.isotope({
                filter: selector
            });
        }
    
    
        function goToPage(n) {
            currentPage = n;
    
            var selector = itemSelector;
                selector += ( currentFilter != '*' ) ? currentFilter : '';
                selector += '['+pageAtribute+'="'+currentPage+'"]';
    
            changeFilter(selector);
        }
    
        function defineItemsPerPage() {
            var pages = itemsPerPageDefault;
    
            for( var i = 0; i < responsiveIsotope.length; i++ ) {
                if( $(window).width() <= responsiveIsotope[i][0] ) {
                    pages = responsiveIsotope[i][1];
                    break;
                }
    
                
    
            }
    
            return pages;
        }
        
        function setPagination() {
    
            var SettingsPagesOnItems = function(){
    
                var itemsLength = $container.children(itemSelector).length;
                
                var pages = Math.ceil(itemsLength / itemsPerPage);
                var item = 1;
                var page = 1;
                var selector = itemSelector;
                    selector += ( currentFilter != '*' ) ? currentFilter : '';
                
                $container.children(selector).each(function(){
                    if( item > itemsPerPage ) {
                        page++;
                        item = 1;
                    }
                    $(this).attr(pageAtribute, page);
                    item++;
                });
    
                currentNumberPages = page;
    
            }();
    
            var CreatePagers = function() {
    
                var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);
    
                $isotopePager.html('');
                
                for( var i = 0; i < currentNumberPages; i++ ) {
                    var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
                        $pager.html(i+1);
                        
                        $pager.click(function(){
                            var page = $(this).eq(0).attr(pageAtribute);
                            goToPage(page);
                        });
    
                    $pager.appendTo($isotopePager);
                }
    
                $container.after($isotopePager);
    
            }();
    
        }
        
        setPagination();
        goToPage(1);
    
        //Adicionando Event de Click para as categorias
        $('.filters a').click(function(e){
            e.preventDefault();
            var filter = $(this).attr(filterAtribute);
            currentFilter = filter;
    
            setPagination();
            goToPage(1);
    
    
        });
    
        //Evento Responsivo
        $(window).resize(function(){
            itemsPerPage = defineItemsPerPage();
            setPagination();
            goToPage(1);
        });
    
        $('.content').addClass('ready');
    
    });

});