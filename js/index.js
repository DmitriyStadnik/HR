$(window).ready(function(){
    $('.top-slider__tiles').css('opacity','1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.slider__arrow--prev'),
        nextArrow: $('.slider__arrow--next'),
        centerMode: false,
        responsive : [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 2,
                    infinite: true,
                    // centerMode: true,
                    slidesToScroll: 4,
                    variableWidth: true,      
                }
            },

        ]
    });
    $('.foxtrot-jobs__professions').not('.slick-initialized').slick({
        infinite:true,
        slidesToShow:5,
        slidesToScroll:3,
        dots: true,
        responsive : [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint : 768,
                settings:{
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
                
            },
        ]
    });

    $('.success__frames').not('.slick-initialized').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        dots: true,
        responsive : [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1600,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:1,
                }
            },
            {
                breakpoint : 768,
                settings:{
                    slidesToShow:1,
                }
            },
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
        event.preventDefault();
        var sidebar = $('.sidebar');
        if (sidebar.hasClass('sidebar--open')) {
            sidebar.removeClass('sidebar--open');
            $('.sidebar-links ').css('opacity','0');
            $('.header_link').css('display','');
            for (let i = 0; i < $('.menu-bar').length; i++) {
                $($('.menu-bar')[i]).removeClass('mb'+i+'--open');
            }
            $('.header').css('background', '#fffffff7');
            $('.header__calltoaction').css('display','');
        }
        else {
            $('.sidebar').addClass('sidebar--open');
            $('.header_link').css('display','none');
            $('.header' ).css('background', '#fff');
            $('.header__calltoaction').css('display','none');
            for (let i = 0; i < $('.menu-bar').length; i++) {
                $($('.menu-bar')[i]).addClass('mb'+i+'--open');
            }
            $('.sidebar-links ').css('opacity','1');

        }
    })

    $('.cities-dropdown').hover(function (event){
        event.preventDefault();
        let content = $(this).find('.cities-dropdown__content');
        if ( !$(content).hasClass('cities-dropdown__content--open')) {
            $(content).addClass ('cities-dropdown__content--open');
            $('body').css('overflow-y','hidden');
            $('.main').css('margin-right','calc(5.20833vw + 7px)');


        }
        else {
            $(content).removeClass('cities-dropdown__content--open');
            $('body').css('overflow-y','');
            $('.main').css('margin-right','5.20833vw');


        }
    })


})


