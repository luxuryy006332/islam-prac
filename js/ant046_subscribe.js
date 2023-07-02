(function ($) {
    "use strict";

    var $contactForm = $('#ant046_subscribe-form');

    if ($contactForm.length > 0) {

        var $formMail = $('#ant046_subscribe-form #ant046_subscribe-email');

        $contactForm.on('submit', function (e) {
            e.preventDefault();

            $.ajax({
                type: $contactForm.attr('method'),
                url: $contactForm.attr('action'),
                data: $contactForm.serialize(),
                success: function (data) {
                    $formMail.val('').attr('disabled', 'disabled');
                    $contactForm.find('.alert-success')[0].hidden = false;
                },
                error: function(error) {
                    $contactForm.find('.alert-danger')[0].hidden = false;
                }
            });
        });
    }

})(jQuery);