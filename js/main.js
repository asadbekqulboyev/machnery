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
   const slides =  new Swiper('.slide_items', {
        
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
    
})