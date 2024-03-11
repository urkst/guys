
$(function () {
    
    'use strict';


    // lenis Smooth scroll
    const lenis = new Lenis({
        duration: 1.2
    })

    lenis.on('scroll', (e) => {
        // console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // integration Lenis on GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });
    


    // create animation ScrollTrigger
    function scrollTrig() {

        gsap.registerPlugin(ScrollTrigger);

        let gsapBl = $('.products__text-block').height();
        // console.log('gsapBl: ', gsapBl);

        // transform slider track
        let gsapTrack = $('.products__text-animation').height();
        // console.log('gsapTrack: ', gsapTrack);
        
        let scrollSliderTransform = gsapTrack - gsapBl;
        // console.log('scrollSliderTransform: ', scrollSliderTransform);

        // create ScrollTrigger
        gsap.to('.products__text-animation', {
            scrollTrigger: {
                trigger: '.products',
                start: 'top top',
                end: () => '+=' + gsapTrack,
                pin: true,
                scrub: true,
                // markers: true,
            },
            y: '-=' + scrollSliderTransform + 'px',
            // y: '-1200',
        });
        
    }

    scrollTrig();


    const products = document.querySelector('.products');
    const productsTextBlock = document.querySelectorAll('.products__text-block');
    // const productsTextFirstBlock = document.querySelectorAll('.products__text-first_block');
    const productsTextSecondBlock = document.querySelectorAll('.products__text-second_block');

    const productsBgRigh = document.querySelectorAll('.products__description-bg-right');
    const productsImg = document.querySelectorAll('.products__img');
    const productsBtn = document.querySelectorAll('.products__animation-btn-block');

    
    const coordProducts = products.getBoundingClientRect();


    function animateImgOpen(productsImg) {
        transition.begin(productsImg, [
            "transform translate(0,0) translate(-107vw,0) 0.3s ease 0.3s",
            "opacity 0 1 0.3s linear 0.3s"
        ]);
    }
    
    function animateBgOpen(productsBgRigh) {
        transition.begin(productsBgRigh, [
            "transform translate(0,0) translate(-100vw,0) 0.4s ease-out 0.4s",
            "opacity 0 1 0.5s linear 0.5s"
        ]);
    }
    
    function animateBtnOpen(productsBtn) {
        transition.begin(productsBtn, [
            "transform translate(0,0) translate(-58vw,0) 0.1s ease 0.1s",
            "opacity 0 1 0.5s linear 0.5s"
        ]);
    }


    function animateImgClose(productsImg) {
        transition.begin(productsImg, [
            "transform translate(-107vw,0) translate(0,0) 0.0s ease 0.0s",
            "opacity 0 1 0s linear 0s"
        ]);
    }
    
    function animateBgClose(productsBgRigh) {
        transition.begin(productsBgRigh, [
            "transform translate(-100vw,0) translate(0,0) 0.0s ease 0.0s",
            "opacity 0 1 0.0s linear 0.0s"
        ]);
    }
    
    function animateBtnClose(productsBtn) {
        transition.begin(productsBtn, [
            "transform translate(-58vw,0) translate(0,0) 0.0s ease 0.0s",
            "opacity 0 1 0s linear 0s"
        ]);
    }


    document.addEventListener('scroll', function () {

        // const slogan = document.querySelector('.slogan');
        // let coordSlogan = slogan.getBoundingClientRect();

        // console.log('coordSlogan.top: ', coordSlogan.top);


        // if (coordSlogan.top < windowHeight / 2 && coordSlogan.top > windowHeight / 3) {
        //     location.reload();
        //     // products.style.top = -'50vh';
        // }

        for (let i = 0; i < productsTextBlock.length; i++) {

            let coordproductsTextBlock = productsTextBlock[i].getBoundingClientRect();
            // let coordProductsTextFirstBlock = productsTextFirstBlock[i].getBoundingClientRect();

            if (coordproductsTextBlock.top >= coordProducts.height - 300 && coordproductsTextBlock.top <= coordProducts.height - 50) {
                productsTextBlock[i].classList.add('products-reveal-active');
            } else {
                productsTextBlock[i].classList.remove('products-reveal-active');
            }


            // if (coordproductsTextBlock.top >= (coordProducts.height / 2.8) && coordproductsTextBlock.top <= coordProducts.height / 2) {

            if (coordproductsTextBlock.top >= (window.innerHeight / 3.2) && coordproductsTextBlock.top <= (window.innerHeight / 2)) {

                // console.log(window.innerHeight);

                // console.log(i);
                // console.log('coordProducts.height / 2: ', coordProducts.height / 2);
                // console.log('coordProducts.height / 2.8: ', coordProducts.height / 2.8);
                // console.log('coordproductsTextBlock.top: ', coordproductsTextBlock.top);

                // productsTextSecondBlock[i].style.marginTop = '-20px';
                // productsTextSecondBlock[i].style.opacity = 1;

                productsTextSecondBlock[i].classList.add('products__text-second_block-open');
                // productsTextBlock[i].style.paddingBottom = '10px';

                if (productsTextSecondBlock[i].classList.contains('products__text-second_block-open')) {
                    animateImgOpen(productsImg[i]);
                    animateBtnOpen(productsBtn[i]);
                    animateBgOpen(productsBgRigh[i]);
                }
                // else {
                //     animateImgClose(productsImg[i]);
                //     animateBtnClose(productsBtn[i]);
                //     animateBgClose(productsBgRigh[i]);
                // }

            } else {

                // productsTextSecondBlock[i].style.marginTop = '-100px';
                // productsTextSecondBlock[i].style.opacity = 0;
                productsTextSecondBlock[i].classList.remove('products__text-second_block-open');
                // productsTextBlock[i].style.paddingBottom = '30px';

                animateImgClose(productsImg[i]);
                animateBtnClose(productsBtn[i]);
                animateBgClose(productsBgRigh[i]);



            }
        }
    });


    // function animatTextOpen() {
        
    //     gsap.registerPlugin(ScrollTrigger);

    //     // let gsapTrack = $('.products__text-animation').height();

    //     gsap.to('.text-second_block', {
	// 		scrollTrigger: {
    //             trigger: '.products__text-animation',
	// 			start: '-10% center',
	// 			// end: () => '+=' + gsapTrack,
	// 			// pin: true,
    //             // scrub: true,
    //             markers: true,
	// 		},
	// 		// y: '-=' + scrollSliderTransform + 'px',
    //         // marginTop: '-20px',
    //         yPercent: 100,
    //         opacity: 1,
    //         duration: 0.6,
	// 	});

    // }

    // animatTextOpen();


    // function animatTextOpen2() {
        
    //     gsap.registerPlugin(ScrollTrigger);

    //     // let gsapTrack = $('.products__text-animation').height();

    //     gsap.to('.text-second_block_2', {
	// 		scrollTrigger: {
    //             trigger: '.products__text-animation',
	// 			start: '-1% center',
	// 			// end: () => '+=' + gsapTrack,
	// 			// pin: true,
    //             // scrub: true,
    //             markers: true,
	// 		},
	// 		// y: '-=' + scrollSliderTransform + 'px',
    //         marginTop: '-20px',
    //         opacity: 1,
    //         duration: 0.6,
	// 	});

    // }

    // // animatTextOpen2();


    // function animatTextClose() {
        
    //     gsap.registerPlugin(ScrollTrigger);

    //     // let gsapTrack = $('.products__text-animation').height();

    //     gsap.to('.text-second_block', {
	// 		scrollTrigger: {
    //             trigger: '.products__text-animation',
	// 			start: '-1% center',
	// 			// end: () => '+=' + gsapTrack,
	// 			// pin: true,
    //             // scrub: true,
    //             markers: true,
	// 		},
	// 		// y: '-=' + scrollSliderTransform + 'px',
    //         // marginTop: '-100px',
    //         yPercent: -100,
    //         opacity: 0,
    //         duration: 0.6,
	// 	});

    // }

    // animatTextClose();


    // const products = document.querySelector('.products');
    // const slogan = document.querySelector('.slogan');

    // document.addEventListener('scroll', function () {
        
    //     let coordProducts = products.getBoundingClientRect();
    //     // console.log('coordProducts: ', coordProducts.top);

    //     let coordSlogan = slogan.getBoundingClientRect();
    //     console.log('coordSlogan: ', coordSlogan.top);

    // });
        

    //resize window

	const debouncedResize = _.debounce(onWindowResize, 500);
	function onWindowResize() {
		console.log('Window resized!');
		location.reload();
	}
	$(window).on('resize', debouncedResize);

});



// const products = document.querySelector('.products');
// const slogan = document.querySelector('.slogan');

// const productsText = document.querySelector('.products__text-animation');
// const productsTextFirstBlock = document.querySelector('.products__text-first_block');
// const productsTextSecondBlock = document.querySelector('.products__text-second_block');
// const productsTextThirdBlock = document.querySelector('.products__text-third_block');
// const productsBgRigh = document.querySelector('.products__description-bg-right');
// const productsImg = document.querySelector('.products__img');
// const productsBtn = document.querySelector('.products__animation-btn-block');

// const clients = document.querySelector('.clients');
// const contacts = document.querySelector('.contacts');
// const news = document.querySelector('.news');
// const footer = document.querySelector('.footer');

// const navLinkNews = document.querySelector('.nav__link4');
// const navLinkContacts = document.querySelector('.nav__link5');

// const coordProductsStart = products.getBoundingClientRect();

// let isAnimationRunning = false;
// let flagTop = true; 
// let flagScrollText = true;
// // let flagClick = false;

// let indexScrollTop = 0;

// let productsTop = 0;
// let scrollTop = 0;


// // stop scroll

// // const scrollController = {
// //     scrollPosition: 0,
// //     disabledScroll() {
// //         scrollController.scrollPosition = window.scrollY;
// //         document.body.style.cssText = `
// //         overflow: hidden;
// //         position: fixed;
// //         top: -${scrollController.scrollPosition}px;
// //         left: 0;
// //         height: 100vh;
// //         width: 100vw;
// //         padding-right: ${window.innerWidth - document.body.offsetWidth}px
// //     `;
// //         document.documentElement.style.scrollBehavior = 'unset';
// //     },
// //     enabledScroll() {
// //         document.body.style.cssText = '';
// //         window.scroll({ top: scrollController.scrollPosition })
// //         document.documentElement.style.scrollBehavior = '';
// //     },
// // }

// // function coordProductsTop(top) {
// //     if (top <= 0) {
// //         slogan.classList.add('slogan-relative');
// //     }
// //     else {
// //         slogan.classList.remove('slogan-relative');
// //     }
// // }


// function scrollSect(top) {
//     if (top === 0) {
//         clients.classList.add('fixed-section');
//         contacts.classList.add('fixed-section');
//         news.classList.add('fixed-section');
//         footer.classList.add('fixed-section');
//     } 
// }

// function scrollTextBlock(top, coordProductsText) {

//     let windowScrollTop = window.pageYOffset;

//     if (top === 0 && flagTop) {

//         productsTop = coordProductsText;  

//         scrollTop = windowScrollTop;

//         flagTop = false;

//         productsText.style.opacity = 0;

//     }
//     else if (top > 0) {
//         productsText.style.top = '100vh';
//     }
//     else if (top === 0 && !flagTop && coordProductsText >= -(window.innerHeight/120)) {
//         productsText.style.top = productsTop - (windowScrollTop - scrollTop) + 'px';

//         if (coordProductsText >= window.innerHeight / 1.5 && coordProductsText < window.innerHeight - 50) {
//             productsText.style.opacity = 1;
//             productsText.classList.add('products-reveal-active');
//         }

//         // console.log(window.innerHeight/120);

//         indexScrollTop = (windowScrollTop - scrollTop) + (window.innerHeight / 2);
        
//     }
//     else if (coordProductsText < -(window.innerHeight/120)) {
//         // scrollController.disabledScroll();
//         flagScrollText = false;

//         productsText.classList.remove('products-reveal-active');
        
//         animate5(productsTextSecondBlock);
//         animate6(productsTextThirdBlock);
//         animate8(productsBgRigh);
//         animate7(productsImg);
//         animate9(productsBtn);

//         setTimeout(function () {
//             isAnimationRunning = true;
//             // scrollController.enabledScroll();
//         }, 2000);

//     } if (top < 0) {
//         isAnimationRunning = true;
//         flagScrollText = false;

//         scrollSectEnd();

//         animate1(productsTextFirstBlock);
//         animate3(productsTextThirdBlock);
//         animate4(productsTextSecondBlock);
//         animate8(productsBgRigh);
//         animate7(productsImg);
//         animate9(productsBtn);   

//     }
// }

// function scrollSectEnd() {

//     products.classList.add('products-relative');

//     clients.classList.remove('fixed-section');
//     contacts.classList.remove('fixed-section');
//     news.classList.remove('fixed-section');
//     footer.classList.remove('fixed-section');

//     // slogan.classList.add('slogan-relative');
//     // products.classList.add('products-relative');

//     // products.style.top = indexScrollTop + "px";

//     // clients.style.top = indexScrollTop + "px";
//     // contacts.style.top = indexScrollTop + "px";
//     // news.style.top = indexScrollTop + "px";
//     // footer.style.top = indexScrollTop + "px";
// }

// function clickHeaderLink() {

//     isAnimationRunning = true;
//     flagScrollText = false;

//     scrollSectEnd();

//     animate1(productsTextFirstBlock);
//     animate3(productsTextThirdBlock);
//     animate4(productsTextSecondBlock);
//     animate8(productsBgRigh);
//     animate7(productsImg);
//     animate9(productsBtn); 

// }


// if (coordProductsStart.top < 0) {

//     clickHeaderLink();

//     // console.log('coordProductsStart.top: ', coordProductsStart.top);


//     // isAnimationRunning = true;
//     // flagScrollText = false;

//     // animate1(productsTextFirstBlock);
//     // animate3(productsTextThirdBlock);
//     // animate4(productsTextSecondBlock);
//     // animate8(productsBgRigh);
//     // animate7(productsImg);
//     // animate9(productsBtn); 
// } else if (coordProductsStart.top >= 0) {
    
//     navLinkNews.addEventListener('click', () => clickHeaderLink());

//     navLinkContacts.addEventListener('click', () => clickHeaderLink());

//         // console.log('coordProductsStart.top: ', coordProductsStart.top);

// }


// function animate1(productsTextFirstBlock) {
//     transition.begin(productsTextFirstBlock, [
//         "transform translate(0,0) translate(0,-90px) 1s ease-in-out",
//         "opacity 0 1 2s linear"
//     ]);
// }

// function animate2(productsText) {
//     transition.begin(productsText, [
//         "transform translate(0,0) translate(0,-105vh) 1s ease-in-out",
//         "opacity 1 1 2s linear"
//     ]);
// }

// function animate3(productsTextThirdBlock) {
//     transition.begin(productsTextThirdBlock, [
//         "transform translate(0,0) translate(0,-20px) 1s ease-in-out",
//         "opacity 0 1 2s linear"
//     ]);
// }

// function animate4(productsTextSecondBlock) {
//     transition.begin(productsTextSecondBlock, [
//         "transform translate(0,0) translate(0,10px) 1s ease-in-out",
//         "opacity 1 1 1s linear"
//     ]);
// }

// function animate5(productsTextSecondBlock) {
//     transition.begin(productsTextSecondBlock, [
//         "transform translate(0,0) translate(0,98px) 0.6s ease-in-out scale(1) 0.6s ease 0.8",
//         "opacity 0 1 0.6s linear 0.8s"
//     ]);
// }

// function animate6(productsTextThirdBlock) {
//     transition.begin(productsTextThirdBlock, [
//         "transform translate(0,0) translate(0,66px) 0.6s ease 0.6s",
//         "opacity 1 1 0.6s linear 0.8s"
//     ]);
// }

// function animate7(productsImg) {
//     transition.begin(productsImg, [
//         "transform translate(0,0) translate(-107vw,0) 0.6s ease 0.8s",
//         "opacity 0 1 0.6s linear 0.6s"
//     ]);
// }

// function animate8(productsBgRigh) {
//     transition.begin(productsBgRigh, [
//         "transform translate(0,0) translate(-100vw,0) 0.6s ease 0.8s",
//         "opacity 0 1 0.6s linear 0.6s"
//     ]);
// }

// function animate9(productsBtn) {
//     transition.begin(productsBtn, [
//         "transform translate(0,0) translate(-58vw,0) 0.6s ease 0.8s",
//         "opacity 0 1 0.6s linear 0.6s"
//     ]);
// }


// document.addEventListener('scroll', function () {

//     if (!isAnimationRunning) {
//         products.classList.remove('products-relative');

//         let coordProducts = products.getBoundingClientRect();
//         let coordProductsText = productsText.getBoundingClientRect();

//         scrollSect(coordProducts.top);

//         if (flagScrollText) {
//             scrollTextBlock(coordProducts.top, coordProductsText.top);
//         }
    
//     } else if (isAnimationRunning) {
//         scrollSectEnd();
//     }

// });
