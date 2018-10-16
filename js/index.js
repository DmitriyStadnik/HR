$(document).ready(function(){

    $('.top-slider__tiles').slick({
        infinite:true,
        slidesToShow:3,
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

    $('.foxtrot-jobs__professions').not('.slick-initialized').slick({
        infinite:true,
        slidesToShow:5,
        slidesToScroll:1,
        responsive : [
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    // $('.success__frames').not('.slick-initialized').slick({
    //     infinite:true,
    //     slidesToShow:5,
    //     slidesToScroll:1,
    //     responsive : [
    //         {
    //             breakpoint: 576,
    //             settings:{
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 arrows: false,
    //                 dots: true,
    //             }
    //         },
    //     ]
    // });
})


