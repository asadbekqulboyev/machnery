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

  
    $(".dropdown_menu_btn").click(function(e){
        e.preventDefault()
        // $(this).toggleClass('active')
        // $('.dropdown_menu_lists').fadeOut();
        // $(this).next('.dropdown_menu_lists').slideToggle()

        if(!$(this).hasClass('active')){
            $(".dropdown_menu_btn").removeClass('active')
            $('.dropdown_menu_lists').slideUp()
            $(this).addClass('active')
            $(this).next('.dropdown_menu_lists').slideDown()
        }else{
            $(this).removeClass('active')
            $(this).next('.dropdown_menu_lists').slideUp()
        }
    })
    $('.mobile_hamburger').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header_menu').toggleClass('active')
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".dropdown_menu_lists").length &&!$(e.target).closest(".dropdown_menu_btn").length) {
            $(".dropdown_menu_lists").fadeOut();
            $(".dropdown_menu_btn").removeClass('active')
        }
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
    function initSwiper2() {
        if ($(window).width() <= 768) {
        if (!$('#structure_content').hasClass('swiper-container')) {
                            $('#category_slides').addClass('swiper-container');
                            $('.structure_items').addClass('swiper-wrapper');
                            $('.structure_item').addClass('swiper-slide');
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
    $(window).on('resize', initSwiper3);
    initSwiper3();
    const resize_catalog = new Swiper('#catalog_sliders',{
        slidesPerView:1.1,
        spaceBetween:10
    })
    
    let swip = new Swiper('#category_slides',{
        slidesPerView:1.1,
        spaceBetween:10
    }) 
    // gallery
    let gallery_slider = new Swiper('.gallery_content',{
        spaceBetween:8,
        breakpoints:{
            0:{
                slidesPerView:2.1
            },
            768:{
                slidesPerView:2.5
            },
            992:{
                slidesPerView:3.1
            }
        }
    })
    // structure_content 
    let strukture = new Swiper('#structure_content',{
        slidesPerView:1.1,
        spaceBetween:8
    })
    let sertificate = new Swiper(
        {
            breakpoints:{
                0:{
                },
                768:{
                },
                992:{
                },
                768:{
                },
            }
        }
    )
    // contact page 
    let phoneInput = $("#phone");
    let countryBtn = $("#country-btn span:first-child"); // Faqat kod o'zgaradi
    let countryList = $("#country-list");

    function applyMask(mask, placeholder, code) {
        phoneInput.val("").attr("placeholder", placeholder).inputmask(mask);
        countryBtn.text(code); // Tugmachadagi mamlakat kodini yangilash
    }

    // Boshlang'ich maska (Qozog‘iston)
    applyMask("+7 999 999 99 99", "+7 771 000 9998", "KZ");

    $("#country-btn").click(function () {
        countryList.slideToggle();
    });

    countryList.on("click", "li", function () {
        let code = $(this).data("code");
        let mask = $(this).data("mask");
        let placeholder = $(this).data("placeholder");

        applyMask(mask, placeholder, code);
        countryList.hide(100);
    });

    
    // $(".accardion_header").on("click", function () {
    //     let item = $(this).parent(); 
    //     let body = $(this).next(".accardion_description");
    //     if (item.hasClass("active")) {
    //         item.removeClass("active");
    //     } else {
    //         $(".accardion_item").removeClass("active"); 
    //         item.addClass("active");
    //     }
    // });

    // let items = $(".accardion_item");
    // let index = 0;

    // function changeActiveItem(next = true) {
    //     items.removeClass("active").eq(index).addClass("active");

    //     let targetImg = items.eq(index).data("target");
    //     $(".accardion_img").removeClass("active").fadeOut(500);
    //     $(`.accardion_img img"${targetImg}`).addClass("active").fadeIn(500);

    //     index = (index + 1) % items.length;
    // }

    // $(".accardion_header").on("click", function () {
    //     index = $(this).parent().index();
    //     changeActiveItem(false);
    // });

    // setInterval(changeActiveItem, 7000);

    // $(".accardion_header").on("click", function () {
    //     let item = $(this).parent(); 
    //     let index = item.index(); // Tanlangan element indexini olish
    //     let nextItem = $(".accardion_item").eq(index + 1); // Keyingi itemni olish
    //     console.log(nextItem);
    //     if (!item.hasClass("active")) {
    //         $(".accardion_item").removeClass("active"); 
    //         item.addClass("active");
    //         $(".img_content .img").hide(); 
    //         $(".img_content .img").eq(index).fadeIn();
    
    //         // 5 soniyadan keyin keyingi itemga o'tish
    //         setTimeout(function () {
    //             if (nextItem.length) {
    //                 nextItem.find(".accardion_header").trigger("click"); // Keyingi elementni avtomatik bosish
    //             }
    //         }, 7000); 
    //     }
    // });
      
    
    // $(".accardion_header").on("click", function () {
    //     let item = $(this).parent(); 
    //     let index = item.index(); // Tanlangan element indexini olish
    //     let nextItem = $(".accardion_item").eq(index + 1); // Keyingi itemni olish
    
    //     if (!item.hasClass("active")) {
    //         $(".accardion_item").removeClass("active"); 
    //         item.addClass("active");
    
    //         // Barcha rasmlarni yashirish va faqat bitta rasmni fadeIn qilish
    //         $(".img_content .img").hide(); 
    //         $(".img_content .img").eq(index).fadeIn();
    
    //         // 5 soniyadan keyin keyingi itemga o'tish
    //         setTimeout(function () {
    //             if (nextItem.length) {
    //                 nextItem.find(".accardion_header").trigger("click"); // Keyingi elementni avtomatik bosish
    //             } else {
    //                 $(".accardion_item").eq(0).find(".accardion_header").trigger("click"); // Yana boshidan boshlash
    //             }
    //         }, 7000); // 5 soniya
    //     }
    // });
    let autoPlay; // Timeoutni saqlash uchun

    function activateAccordion(index) {
        let items = $(".accardion_item");
        let images = $(".img_content .img");

        if (items.length === 0) return; // Agar accordion bo'lmasa, chiqib ketish

        let item = items.eq(index);
        let nextIndex = (index + 1) % items.length; // Oxirgi bo‘lsa, boshidan boshlash

        // Oldingi active classni olib tashlash va yangi active qo'shish
        items.removeClass("active");
        item.addClass("active");

        // Barcha rasmlarni yashirib, faqat bitta rasmni ko‘rsatish
        images.hide();
        images.eq(index).fadeIn();

        // Eski setTimeout ni to'xtatish
        clearTimeout(autoPlay);

        // Keyingi itemni 5 soniyadan keyin faollashtirish
        autoPlay = setTimeout(function () {
            activateAccordion(nextIndex);
        }, 7000);
    }

    // Sahifa yangilanganda birinchi accordionni ishga tushirish
    activateAccordion(0);

    // Foydalanuvchi biron bir accordionni bossachi? 
    $(".accardion_header").on("click", function () {
        let index = $(this).parent().index();
        activateAccordion(index); // Tanlangan joydan davom etadi
    });
       
    
});
    

