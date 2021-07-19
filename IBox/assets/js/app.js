$(document).ready(function () {
    $(".quest").click(function () {
        $(".ans").slideUp()
        $(this).toggleClass('q-plus-active')
        $(this).find('.ans').stop().slideToggle()
        $('.quest').not(this).removeClass('q-plus-active')
    })

    $(".header .header-menu menu li").click(function () {
        $(this).addClass("after-active")
    })

    // $(".menu-btn").click(function () {
    //     $(this).toggleClass("is-active");
    // });

    // $(".header-wrapper .menu-btn").click(function () {
    //     $('.header-menu').toggleClass('open-menu'),

    // $('body').toggleClass('overflow-hidden')
    // })

    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $('.header-menu').toggleClass('open-menu'),
            $('body').toggleClass('overflow-hidden')


    });


    $(window).resize(function () {
        if ($(window).width() > 767) {
            $('body').removeClass('overflow-hidden')
        } else {
            if ($('.header-menu').hasClass('open-menu')) {
                $('body').addClass('overflow-hidden')

            }
        }

    });

    $(".close").click(function () {
        $(this).parent().parent().css("display", "none")
    })



})





// $(".header-wrapper .menu-btn).click(function () {
// $('.header-menu').toggleClass('open-menu'),
// $('body').toggleClass('overflow-hidden')
// })