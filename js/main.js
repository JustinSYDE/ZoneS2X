$(document).ready(function() {
    $("#lightSlider").lightSlider(); 

    var site = $('#site');
            
    $(document).ready(function() {
        $('#lightSlider').lightSlider({
            minSlide:1,
            maxSlide:1,
            keyPress:false,
            speed:2000,
            auto:true,
            controls:false,
            onSliderLoad: function() {
                $('#content-slider').removeClass('cS-hidden');
            } 
        });
    });

    /*$(window).load(function() {
        if ($(window).width() <= 691) {
               $ disable hover;
        }
    });*/
});
