(function ($) {
    "use strict";

    /*---------------------
      menu-stick
    --------------------- */
    var s = $("#ant022_header-sticker");
    var pos = s.position();
    $(window).on('scroll', function () {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('.ant022_header-mainmenu nav').meanmenu({
        meanScreenWidth: "768"
    });

    /*--------------------------
     search
    ---------------------------- */
    $(".ant022_header-searching-icon").on("click", function () {
        $(".ant022_header-search").toggleClass("ant022_header-active");
    });

})(jQuery);