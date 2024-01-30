document.addEventListener('DOMContentLoaded', function () {

    // slider portfolio

    const swiperPortfolio = new Swiper('.portfolio__slider', {
        loop: true,
        navigation: {
            prevEl: '.portfolio__slider-btn-prev',
            nextEl: '.portfolio__slider-btn-next'
        },

        breakpoints: {
            1025: {
                slidesPerView: 1.815,
                spaceBetween: 24,
            },
            920: {
                slidesPerView: 1.5,
                spaceBetween: 18,
            },
            820: {
                slidesPerView: 1.4,
                spaceBetween: 16,
            },
            640: {
                slidesPerView: 1.3,
                spaceBetween: 14,
            },
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            }
        },

        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        // grabCursor: true,

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        // mousewheel: {
        //     sensitivity: 1,
        // },

        autoHeight: true,

        autoplay: {
            delay: 3000,
        },
        speed: 1000,

        // freeMode: true,

        effect: 'slide',

    
        // stop slider portfolio

        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },

    });
    // swiperPortfolio.init();

    // stop slider portfolio

    // let sliderBlock = document.querySelector('.portfolio__slider-block');
    // let portfolioSlider = document.querySelector('.portfolio__slider');

    // sliderBlock.addEventListener("mouseleve", function (e) {
    //     portfolioSlider.params.autoplay.disableOnInteraction = false;
    //     portfolioSlider.params.autoplay.delay = 3000;
    //     portfolioSlider.autoplay.start();
    // });

    // sliderBlock.addEventListener("mouseenter", function (e) {
    //     portfolioSlider.autoplay.stop();
    // });


    // const cursor = document.getElementById('cursor');
    const follower = document.getElementById('aura');
    const portfolio = document.querySelector('.portfolio');
    const portfolioSlider = document.querySelector('.portfolio__slider'); 
    const portfolioSliderItems = document.querySelectorAll('.portfolio__slider-item'); 
    const swiperSlides = portfolio.querySelectorAll('.swiper-slide');
    const portfolioDescriptionWrappers = document.querySelectorAll('.portfolio__description-wrapper'); 

    const links = document.querySelectorAll('.portfolio__link');
    const portfolioNames = document.querySelectorAll('.portfolio__description-name');

    const portfolioBtns = document.querySelectorAll('.portfolio__slider-btn');

    const images = document.querySelectorAll('div.portfolio__slider-img > img');

    let descriptionWidth = 0;


    const windowWidth = window.innerWidth;
    // console.log('windowWidth: ', windowWidth);

    mouseX = 0;
    mouseY = 0;
    posX = 0;
    posY = 0;

    function mouseCoords(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

        // console.log(e.pageX + '/' + e.pageY);
    }

    let navigationFlag = true;
    let navigationFlagPrev = false;
    let navigationFlagNext = false;

    const settingDescriptionWidth = function () {

        for (let i = 0; i < portfolioDescriptionWrappers.length; i++) {

            const coordPortfolioSlider = portfolioSlider.getBoundingClientRect();
            const coordSwiperSlide = swiperSlides[i].getBoundingClientRect();
            let coordPortfolioName = portfolioNames[i].getBoundingClientRect();
        
            const slideMarginRight = window.getComputedStyle(swiperSlides[i], null).getPropertyValue("margin-right");
    
            if (swiperSlides[i].classList.contains('swiper-slide-active') && coordPortfolioName.left < windowWidth / 3) {

                descriptionWidth = coordSwiperSlide.width;

                portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';    
            }
            
            else if (swiperSlides[i].classList.contains('swiper-slide-next') && coordPortfolioName.left > windowWidth / 3) {
        
                descriptionWidth = coordPortfolioSlider.width - coordSwiperSlide.width - parseInt(slideMarginRight);
                
                portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';    
            }
            
            else if (swiperSlides[i].classList.contains('swiper-slide-prev') && coordPortfolioName.left > windowWidth / 3) {
    
                descriptionWidth = coordPortfolioSlider.width - coordSwiperSlide.width - parseInt(slideMarginRight);
                
                portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';    
            }
            
            else {
        
                descriptionWidth = coordSwiperSlide.width;

                portfolioDescriptionWrappers[i].style.maxWidth = descriptionWidth + 'px';  
            }
            
        }    
    }

    const descriptionNameActive = function () {

        for (let i = 0; i < portfolioNames.length; i++) {

            let coordPortfolioName = portfolioNames[i].getBoundingClientRect();

            if (swiperSlides[i].classList.contains('swiper-slide-active') && navigationFlag && !navigationFlagNext && coordPortfolioName.left < windowWidth / 3) {
                portfolioNames[i].classList.add('portfolio__description-name-active');

            } else if ((swiperSlides[i].classList.contains('swiper-slide-next') && navigationFlagNext && !navigationFlag && coordPortfolioName.left > windowWidth / 3)) {
                portfolioNames[i].classList.add('portfolio__description-name-active');
            
            } else if ((swiperSlides[i].classList.contains('swiper-slide-prev') && navigationFlagPrev && coordPortfolioName.left < windowWidth / 3)) {
                portfolioNames[i].classList.add('portfolio__description-name-active');

            } else {
                portfolioNames[i].classList.remove('portfolio__description-name-active');
            }
    
        }
        navigationFlag = false;
        navigationFlagNext = true;
        navigationFlagPrev = true;
    }

    swiperPortfolio.on('slideChange', function () { 
        settingDescriptionWidth();
        descriptionNameActive();
    });

    swiperPortfolio.on('slideChangeTransitionEnd', function () {
        settingDescriptionWidth();
    });

    swiperPortfolio.on('slideChangeTransitionStart', function () {
        settingDescriptionWidth();
    });

    // swiperPortfolio.on('slideNextTransitionEnd', function () {
    //     settingDescriptionWidth();
    // });

    // swiperPortfolio.on('slideNextTransitionStart', function () {
    //     settingDescriptionWidth();
    // });

    // swiperPortfolio.on('slidePrevTransitionEnd', function () {
    //     settingDescriptionWidth();
    // });

    // swiperPortfolio.on('slidePrevTransitionStart', function () {
    //     settingDescriptionWidth();
    // });

    // swiperPortfolio.on('slideResetTransitionEnd', function () {
    //     settingDescriptionWidth();
    // });


    // swiperPortfolio.on('slideChange', function () {
        
    //     for (let i = 0; i < portfolioNames.length; i++) {

    //         let coordPortfolioName = portfolioNames[i].getBoundingClientRect();

    //         if (swiperSlides[i].classList.contains('swiper-slide-active') && navigationFlag && coordPortfolioName.left < windowWidth / 3) {
    //             portfolioNames[i].classList.add('portfolio__description-name-active');

    //         } else if ((swiperSlides[i].classList.contains('swiper-slide-next') && navigationFlagNext && coordPortfolioName.left > windowWidth / 3)) {
    //             portfolioNames[i].classList.add('portfolio__description-name-active');
            
    //         } else if ((swiperSlides[i].classList.contains('swiper-slide-prev') && navigationFlagPrev && coordPortfolioName.left < windowWidth / 3)) {
    //             portfolioNames[i].classList.add('portfolio__description-name-active');

    //         } else {
    //             portfolioNames[i].classList.remove('portfolio__description-name-active');
    //         }
    
    //     }
    //     navigationFlag = false;
    //     navigationFlagNext = true;
    //     navigationFlagPrev = true;
    // });


    // portfolio.addEventListener('mouseover', () => {

    //     for (let i = 0; i < images.length; i++) {

    //         if (images[i].classList.contains('poligon_away' + i)) {
    //             images[i].classList.remove('poligon_away' + i);
    //         } 
    //     }
    
    // });
    

    portfolio.addEventListener('mousemove', e => {
        
        clientX = e.pageX;
        clientY = e.pageY;

        let poligonFlag = false;

        mouseCoords(e);

        // cursor.style.display = 'block';
        follower.style.display = 'block';
        // cursor.classList.remove('cursor-hidden');
        // follower.classList.remove('cursor-hidden');

        for (let i = 0; i < images.length; i++) {

            images[i].addEventListener('mouseover', () => {
            
                images[i].classList.add('poligon' + i);
                // animate(images[i]);
                poligonFlag = true;
                
            });

            images[i].addEventListener('mouseout', () => {
            
                images[i].classList.remove('poligon' + i);
                portfolioNames[i].classList.remove('underline');

                if (poligonFlag) {
                    images[i].classList.add('poligon_away' + i);

                } 
            });

        }

        for (let i = 0; i < images.length; i++) {

            if (swiperSlides[i].classList.contains('swiper-slide-active') && images[i].classList.contains('poligon' + i)) {
                    
                portfolioNames[i].classList.add('underline');
            }
        }

            
        // for (let i = 0; i < images.length; i++) {
        //     images[i].addEventListener('mouseout', e => {
            
        //         images[i].classList.remove('poligon');
        // });


    });


    gsap.to({}, .01, {

        repeat: -1,

        onRepeat: () => {

            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            // gsap.set(cursor, {
            //     css: {
            //         left: mouseX,
            //         top: mouseY
            //     }
            // });

            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 23
                }
            });
        }
    });


    for (let i = 0; i < links.length; i++) {

        links[i].addEventListener('mouseover', () => {
            // cursor.classList.add('cursor_active');
            follower.classList.add('cursor_active');
        });

        links[i].addEventListener('mouseout', () => {
            // cursor.classList.remove('cursor_active');
            follower.classList.remove('cursor_active');
        });
    }

    for (let i = 0; i < portfolioBtns.length; i++) {

        portfolioBtns[i].addEventListener('mouseover', () => {
            // cursor.classList.add('cursor_active');
            follower.classList.add('cursor_active');
        });

        portfolioBtns[i].addEventListener('mouseout', () => {
            // cursor.classList.remove('cursor_active');
            follower.classList.remove('cursor_active');
        });
    }
    

    portfolio.addEventListener('mouseout', () => {
        // cursor.style.display = 'none';
        follower.style.display = 'none';

        // for (let i = 0; i < images.length; i++) {
        //     images[i].classList.remove('poligon_away' + i);
        //     console.log(i);
        // }
        // cursor.classList.add('cursor-hidden');
        // follower.classList.add('cursor-hidden');
        
    });

});
