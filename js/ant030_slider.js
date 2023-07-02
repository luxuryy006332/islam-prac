(function ($) {
    "use strict";

    $(document).ready(function () {
        if ($.fn.owlCarousel) {
            var hero_slider = $('.ant030_slider-hero_slider');
            hero_slider.owlCarousel({
                nav: false,
                dots: true,
                autoplay: false,
                loop: true,
                items: 1,
                smartSpeed: 500,
                mouseDrag: false,
                touchDrag: false,
                animation: false
            });
        }
    });

})(jQuery);