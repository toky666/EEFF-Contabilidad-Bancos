(function ($) {
    "use strict";


    /*----------------------------
    		Video popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });
    // $("#popup-video2").magnificPopup({
    //     type: "iframe"
    // });

    new WOW().init();

})(jQuery);