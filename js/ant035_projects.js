(function ($) {
    "use strict";

    $(document).ready(function () {
        if ($.fn.owlCarousel) {
            var studio_project_crsl = $('.ant035_projects-studio_project_crsl');
            studio_project_crsl.owlCarousel({
                nav: true,
                dots: false,
                autoplay: false,
                loop: true,
                margin: 240,
                smartSpeed: 500,
                center: true,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                responsiveClass: true,
                responsive: {
                    300: {
                        items: 1,
                        center: false
                    },
                    480: {
                        items: 1,
                        center: false
                    },
                    768: {
                        items: 3,
                        margin: 150
                    },
                    992: {
                        items: 3,
                        margin: 200
                    },
                    1170: {
                        items: 3
                    }
                }
            });
        }
    });

})(jQuery);