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

    $('.sidebar__toggler').click(function(event){
        event.preventDefault;
        var sidebar = $('.sidebar');
        if (sidebar.hasClass('sidebar--open')) {
            sidebar.removeClass('sidebar--open');
            $('.header_link').css('display','');
            for (let i = 0; i < $('.menu-bar').length; i++) {
                $($('.menu-bar')[i]).removeClass('mb'+i+'--open');
            }
        }
        else {
            $('.sidebar').addClass('sidebar--open');
            $('.header_link').css('display','none');
            for (let i = 0; i < $('.menu-bar').length; i++) {
                $($('.menu-bar')[i]).addClass('mb'+i+'--open');
            }
        }
    })

    // $('.success__frames').not('.slick-initialized').slick({
    //     infinite:true,
    //     slidesToShow:1,
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


