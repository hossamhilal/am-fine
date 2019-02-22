jQuery(window).load(function () {

    // PAGE LOADER

    $('.pre-load').stop().animate({opacity:0}, 500, function(){
        $('.pre-load').css({'display':'none'});
        $('body').css({'overflow-y':'auto'});
    });


    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});


$(document).ready(function() {


    // WINDOW HEIGHT

    SliderHeight();
    $(window).resize(function (){
        SliderHeight();
    });

    function SliderHeight() {
        $('.win-height').css({'height': $(window).height()});
    }



    // SMOOTH SCROLL

    $('.nav a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 75
        }, 1000);
        return false;
    });



    // OWL APP

    $('#owl_app').owlCarousel({
        responsive: {
            320: {
                items: 1
            },
            500: {
                items: 2
            },
            768: {
                items: 3
            }
        },
        loop: true,
        margin: 0,
        dots: true,
        center: true
    });



    // OWL TESTIMONIALS

    $('#owl_test').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        rtl: true,
        dots: true
    });


});