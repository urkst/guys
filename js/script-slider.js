"use strict"

document.addEventListener('DOMContentLoaded', function () {


    
    // slider clients

    new Swiper('.clients__slider', {
        // slidesPerView: 4,
        // spaceBetween: 135,
        loop: true,
        navigation: {
            prevEl: '.clients__slider-btn-prev',
            nextEl: '.clients__slider-btn-next'
        },

        breakpoints: {
            1025: {
                slidesPerView: 4,
                spaceBetween: 135,
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 110,
            },
            // 820: {
            //     slidesPerView: 1.4,
            //     spaceBetween: 16,
            // },
            640: {
                slidesPerView: 2,
                spaceBetween: 80,
            },
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            }
        },

        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        // mousewheel: {
        //     sensitivity: 1,
        // },

        autoHeight: true,

        // autoplay: {
        //     delay: 3000,
        // },
        speed: 600,

        // freeMode: true,

        effect: 'slide',

        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.start();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.stop();
                });
            }
        },

    });

});