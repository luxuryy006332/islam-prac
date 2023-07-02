(function ($) {
    "use strict";

    $(document).ready(function () {
        if ($.fn.owlCarousel) {
            var studio_client_crsl = $('.ant036_testimonials-studio_client_crsl');
            studio_client_crsl.owlCarousel({
                nav: false,
                dots: true,
                autoplay: false,
                loop: true,
                margin: 30,
                smartSpeed: 1000,
                items: 2,
                dotsEach: true,
                responsiveClass: true,
                responsive: {
                    300: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1170: {
                        items: 2
                    }
                }
            });
        }
    });

})(jQuery);