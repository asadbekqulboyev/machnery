$(document).ready(function () {
    // $('.mobile_menu_btn').on('click',function(e){
    //     e.preventDefault();
    //     $('.mobile_menu').addClass('active');
    //     $('body').addClass('active');
    // })
    // $('.close_menu').on('click',function(e){
    //     e.preventDefault();
    //     $('.mobile_menu').removeClass('active');
    //     $('body').removeClass('active');
    // })

    // $(document).ready(function () {
    //     $(".select_btn").click(function (event) {
    //         event.preventDefault(); // Standart o'tishni bloklash
    //         $("#exampleModal").modal("show"); // Modalni ochish
    //     });
    // });
    $('.mobile_hamburger').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header_menu').toggleClass('active')
    });
    // PRODUCTION PAGE
    const slides =  new Swiper('.production .slide_items', {
        
        spaceBetween:8,
        // breackpoint:{
        //     0:{
        //         slidesPerView:1,
        //     },
        //     768:{
        //         slidesPerView:2.5,
        //     },
        //     992:{
        //         slidesPerView:2.9,
        //     },
        //     1424:{
        //         slidesPerView:3.25,
        //     }
        // }
        loop: true,
        fade:true,
        autoplay: {
            delay: 5000, 
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.5,
            },
            992: {
                slidesPerView: 2.3,
            },
            1424: {
                slidesPerView: 3.25,
            }
        }
    })
    // catalog slider
    let swiper;
    function initSwiper() {
    if ($(window).width() <= 768) {
    if (!$('#catalog_slider').hasClass('swiper-container')) {
                        $('#catalog_slider').addClass('swiper-container');
                        $('#catalog_items').addClass('swiper-wrapper');
                        $('.card').addClass('swiper-slide');
                        swiper = new Swiper('.swiper-container', {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                            loop: true,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: true,
                            },
                        });
                        // Swiper pagination qo'shish
                        $('#catalog_slider').append('<div class="swiper-pagination"></div>');
    }
     } else {
                    if ($('#catalog_slider').hasClass('swiper-container')) {
                        swiper.destroy(true, true);
                        $('#catalog_slider').removeClass('swiper-container');
                        $('#catalog_items').removeClass('swiper-wrapper');
                        $('.card').removeClass('swiper-slide');
                        $('.swiper-pagination').remove();
                    }
    }
    }
    function initSwiper2() {
        if ($(window).width() <= 768) {
        if (!$('#category_slides').hasClass('swiper-container')) {
                            $('#category_slides').addClass('swiper-container');
                            $('#slide_content').addClass('swiper-wrapper');
                            $('.slide_item').addClass('swiper-slide');
                            swiper = new Swiper('.swiper-container', {
                                slidesPerView: 1.1,
                                spaceBetween: 10,
                                loop: true,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: true,
                                },
                            });
                           
        }
         } else {
                        if ($('#category_slides').hasClass('swiper-container')) {
                            swiper.destroy(true, true);
                            $('#catalog_slider').removeClass('swiper-container');
                            $('#catalog_items').removeClass('swiper-wrapper');
                            $('.slide_item').removeClass('swiper-slide');
                            $('.swiper-pagination').remove();
                        }
        }
        }
    $(window).on('resize', initSwiper);
    initSwiper();

    $(window).on('resize', initSwiper2);
    initSwiper2();

    const resize_catalog = new Swiper('#catalog_sliders',{
        slidesPerView:1.1,
        spaceBetween:10
    })
    

    let swip = new Swiper('#category_slides',{
        slidesPerView:1.1,
        spaceBetween:10
    }) 
    // contact page 
    // var input = $("#phone");
    // var countryBtn = $("#country-btn");

    // var iti = window.intlTelInput(input[0], {
    //     initialCountry: "kz", // Standart davlat
    //     separateDialCode: true, // Kod inputdan ajratiladi
    //     nationalMode: false, // To'liq format
    //     utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js"
    // });

    // // "KZ" tugmasi bosilganda davlatlar ro‘yxatini ochish
    // countryBtn.on("click", function () {
    //     $(".iti__flag-container").onclick(); // **Davlatlar ro'yxatini ochish**
    // });

    // // Davlat kodi o‘zgarganda tugmadagi matnni yangilash
    // input.on("countrychange", function () {
    //     var countryData = iti.getSelectedCountryData();
    //     countryBtn.text(countryData.iso2.toUpperCase() + " ▾"); // Masalan: "RU ▾", "US ▾", "UZ ▾"
    // });
});
    

