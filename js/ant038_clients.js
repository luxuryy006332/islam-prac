(function ($) {
    "use strict";

    $(document).ready(function () {
        if ($.fn.owlCarousel) {
            var studio_brand_crsl = $('.ant038_clients-studio_brand_crsl');
            studio_brand_crsl.owlCarousel({
                nav: true,
                dots: false,
                autoplay: false,
                loop: true,
                margin: 10,
                smartSpeed: 1000,
                items: 3,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                responsiveClass: true,
                responsive: {
                    300: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1170: {
                        items: 5
                    }
                }
            });
        }
    });

})(jQuery);