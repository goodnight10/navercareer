$(function () {
    /**
     * 하단메뉴 열고닫기
     *
     * @version 1.0.0
     * @since 2022-06-20
     * @author jy
     */

    $('.footer .link-relate').click(function (e) {
        e.preventDefault();
        if ($('.relate-list').hasClass('active')) {
            $('.relate-list').removeClass('active')

        } else {
            $('.relate-list').addClass('active')
        }
    })

    $('label').click(function (e) {
        e.preventDefault();
        if ($('.cb1::after').hasClass('active')) {
            $('.cb1::after').removeClass('active')
        } else {
            $('.cb1::after').addClass('active')
        }
    })
    /**
     * 마우스 올리면 서브메뉴 나타나기
     *
     * @version 1.0.0
     * @since 2022-06-21
     * @author jy
     */




    $('.gnb-item').hover(function () {
        if ($(this).find('.sub-list').length) {
            $(this).find('.sub-list').addClass('active');
            $('header').addClass('active');
        }
    }, function () {
        $('.sub-list').removeClass('active');
        $('header').removeClass('active');
    })


    //   모바일

    /**
     * 모바일 서브메뉴 
     *
     * @version 1.0.0
     * @since 2022-06-25
     * @author jy
     */


    $('.link-menu-mb.title-mb').click(function (e) {
        e.preventDefault();
        if ($(this).next('.sub-list-mb').length) {
            $(this).next('.sub-list-mb').toggleClass('active')
        }
    })



    /**
     * 모바일 서브메뉴 열고닫기
     *
     * @version 1.0.0
     * @since 2022-06-25
     * @author jy
     */

    $('.btn-menu').click(function (e) {
        e.preventDefault();
        $('.menu-wrap-mb').toggleClass('active');
        $('.btn-menu').toggleClass('close');


    })




    /**
     * 클릭시 검색창 열리고 닫기 누르면 닫히기
     *
     * @version 1.0.0
     * @since 2022-06-25
     * @author jy
     */

    $('.btn-search-mb').click(function (e) {
        e.preventDefault();
        $('.search-pop-mb').addClass('active');
    })
    $('.search-pop-mb .close').click(function (e) {
        e.preventDefault();
        $('.search-pop-mb').removeClass('active');
    })


    /**
     * 서치 메뉴 여닫기
     *
     * @version 1.0.0
     * @since 2022-06-25
     * @author jy
     */


    $('.link-search.arrow-mb').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next("ul").toggleClass('active');
    })

    $('.link-search2.arrow-mb').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next("ul").toggleClass('active');
    })


    /**
     * 태블릿,모바일 화면 검색창 체크박스 체크/해제
     *
     * @version 1.0.0
     * @since 2022-06-25
     * @author jy
     */


    $('.sc-search .search-item label').click(function () {
        $(this).toggleClass('active');
    })

    /**
     * 슬라이드 메뉴들
     *
     * @version 1.0.0
     * @since 2022-06-25
     * @author jy
     */


    var swiper = new Swiper(".main-slide", {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: '1',
    });

    var swiper = new Swiper(".people-slide", {
        spaceBetween: 30,
        slidesPerView: '1.1',

        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",

        },
    });
    var swiper = new Swiper(".benefit-slide", {
        spaceBetween: 30,
        slidesPerView: '1',

        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",

        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1023: {
                slidesPerView: 3,
            }
        }
    });



});