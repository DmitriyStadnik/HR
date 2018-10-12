$(document).ready(function(){

    $('.top-slider__tiles').slick({
        infinite:true,
        slidesToShow:5,
        slidesToScroll:2,
        prevArrow: $('.slider__arrow--prev'),
        nextArrow: $('.slider__arrow--next'),
        responsive : [
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 2,
                    variableWidth: true,

                }
            },
        ]
    });

})

