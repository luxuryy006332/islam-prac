(function ($) {
    "use strict";

    if ($.fn.isotope) {   
        $(".ant042_portfolio-isotopeActive").isotope({
            filter: '*',
            masonry:{
            columnWidth:'.ant042_portfolio-single_project',
        },
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.isotop-nav li').on("click",function () {
            $(".isotop-nav li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".ant042_portfolio-isotopeActive").isotope({
                filter: selector,
            });
            return false;
        });
    }

})(jQuery);