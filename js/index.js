$(window).ready(function(){
    $('.top-slider__tiles').not('.slick-initialized').css('opacity','1').slick({
        infinite:false,
        slidesToShow:3,
        variableWidth: false,
        prevArrow: $('.slider__arrow--prev'),
        nextArrow: $('.slider__arrow--next'),
        useTransform: true,
        responsive : [
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
            $(this).removeClass('sidebar__toggler--opening');
        }
        else {
            $('.sidebar').addClass('sidebar--open');
            $('.header_link').css('display','none');
            $('.header' ).css('background', '#fff');
            for (let i = 0; i < $('.menu-bar').length; i++) {
                $($('.menu-bar')[i]).addClass('mb'+i+'--open');
            }
            $(this).addClass('sidebar__toggler--opening');
            $('.sidebar-links ').css('opacity','1');
        }
    })

    $('.cities-dropdown').hover(function (event){
        event.preventDefault();
        let content = $(this).find('.cities-dropdown__content');
        if ( !$(content).hasClass('cities-dropdown__content--open')) {
            $(content).addClass ('cities-dropdown__content--open');
            if (screen.width < 576)
            $('.main').css('margin-right','calc(5.208333333333334vw + 7px)' );
            $('body').css('overflow-y','hidden');
        }
        else {
            $(content).removeClass('cities-dropdown__content--open');
            if (screen.width < 576)
            $('.main').css('margin-right','5.208333333333334vw' );
            $('body').css('overflow-y','');
        }
    })

})


