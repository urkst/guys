"use strict"

// slider guys

new Swiper('.guys__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.guys__slider-btn-next'
    },
    autoplay: {
        delay: 4000,
    },
    speed: 800,

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },

    effect: 'cube',
        cubeEffect: {
        slideShadows: false,
        shadow: true,
        shadowOffset: 25,
        shadowScale: 0.94
    },
        
    // effect: 'flip',
    //     flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },
        
    // freeMode: true,

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     560: {
    //         spaceBetween: 2,
    //     }
    // },
    
});


// header__language

// polyfill for method forEach for NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')

    // open/close select
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown__list--visible');
        // this.classList.add('dropdown__button--active');
    });

    // selection list item
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            // dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
        });
    });

    // close select
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownBtn.classList.remove('dropdown__button--active');
        }
    });

    // close select
    document.addEventListener('keydown', function (e) { 
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownBtn.classList.remove('dropdown__button--active');
        }
    });

});


// slider home

new Swiper('.slider__home', {
    slidesPerView: 1,
    spaceBetween: 300,
    loop: true,
    navigation: {
        nextEl: '.slider__home-arrow-btn-next'
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     }
    // },

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

    autoplay: {
        delay: 3000,
    },
    speed: 800,

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 30,
    //     shadowScale: 0.94
    // },

    // effect: 'slide',
    
}); 


// slider portfolio

new Swiper('.portfolio__slider', {
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

    autoplay: {
        delay: 3000,
    },
    speed: 600,

    freeMode: true,

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

    autoplay: {
        delay: 3000,
    },
    speed: 600,

    // freeMode: true,

    effect: 'slide',

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


// stop scroll

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${scrollController.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({top: scrollController.scrollPosition})
        document.documentElement.style.scrollBehavior = '';
    },
}


// section contacts 
// inputmask and validate

const phone = document.getElementById('phone');
const imPhone = new Inputmask('+3(999)999-99-99');

imPhone.mask(phone);


const validator = new JustValidate('.contacts__form', {
    errorLabelCssClass: 'contacts__input-error',
    errorLabelStyle: {
        color: '#E53939',
    },
});

validator.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Вкажіть ваше ім`я',
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Не менше 2х символів',
    },
    {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Не більше 30 символів',
    }
]);
    
validator.addField('#phone', [
    {
        rule: 'required',
        errorMessage: 'Вкажіть номер телефону',
    },
    {
        validator: value => {
            const number = phone.inputmask.unmaskedvalue();
            return number.length === 10;
        },
        errorMessage: 'Неправильний номер телефону',
    }
]);

validator.onSuccess((event) => {
    const form = event.currentTarget;

    const popupThx = document.querySelector('.popup__thx');
    const popupThxText = document.querySelector('.popup__thx-text');
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
        body: JSON.stringify({
        title: form.title.value,
        name: form.name.value,
        phone: form.phone.value,
        company: form.company.value,
        email: form.email.value,
        textarea: form.textarea.value
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
        form.reset();
        // alert(`Спасибо, мы перезвоним вам в течении 10 минут. Ваша заявка № ${data.id}`);
        popupThx.classList.add('active');
        popupThxText.textContent = `Ваша заявка № ${data.id}`;
        
        scrollController.disabledScroll();
    });

    setTimeout(function () {
        popupThx.classList.remove('active');
        scrollController.enabledScroll();
    }, 5000);
});


// ripple
// click for button
document.addEventListener("click", function (e) {
    const targetItem = e.target;

    if (targetItem.closest('[data-ripple]')) {

        // const
        const button = targetItem.closest('[data-ripple]');
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        //  creation element ripple
        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
        ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
        ripple.classList.add('ripple');

        // deleting the current element (optional)
        button.dataset.ripple === 'once' && button.querySelector('.ripple') ? button.querySelector('.ripple').remove() : null;

        // add element in button 
        button.appendChild(ripple);

        // getting animation duration
        const timeOut = this.getAnimationDuration(ripple);

        // remove element
        setTimeout(() => {
            ripple ? ripple.remove() : null;
        }, timeOut);

        // function getting animation duration
        function getAnimationDuration() {
            const aDuration = window.getComputedStyle(ripple).animationDirection;
            return aDuration.includes('ms') ? aDuration.replace("ms", '') : aDuration.replace("s", '') * 1000;
        }
    }
});


// open-close news

document.addEventListener('DOMContentLoaded', function () {

    let newsBtnOpen = document.querySelector('.news__animation-btn-open');
    let newsBtnClose = document.querySelector('.news__animation-btn-close');

    let newsList = document.querySelector('.news__wrapper-list');
    let newsBtnWrapperClose = document.querySelector('.news__btn-wrapper-close');
    let newsBtnWrapperOpen = document.querySelector('.news__btn-wrapper-open');

    // btn.addEventListener('click', () => {
    //     el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
    // });

    newsBtnOpen.addEventListener('click', () => {
        newsList.style.display = "block";
        newsBtnWrapperClose.style.display = "flex";
        newsBtnWrapperOpen.style.display = "none";
    });

    newsBtnClose.addEventListener('click', () => {
        newsList.style.display = "none";
        newsBtnWrapperClose.style.display = "none";
        newsBtnWrapperOpen.style.display = "flex";
        
        window.scrollTo(pageYOffset, 0);
    });
    
});


// menu navigation

const headerNavBtn = document.querySelector('.header__nav-btn');
const navIconBtn = document.querySelector('.nav-icon-btn');
// const headerNav = document.querySelector('.header__nav');
const headerLanguage = document.querySelector('.header__language');
const headerNavClose = document.querySelector('.header__nav-close');
const headerContainer = document.querySelector('.header__container');

headerNavBtn.addEventListener('click', () => {
    headerContainer.classList.add('header__container-mobile');
    navIconBtn.style.display = 'none';
    headerLanguage.style.display = 'block';
    headerNavClose.style.display = 'block';
    // stop scroll
    document.body.classList.toggle('no-scroll');
    // scrollController.disabledScroll();
}); 

headerNavClose.addEventListener('click', () => {
    headerContainer.classList.remove('header__container-mobile');
    navIconBtn.style.display = 'flex';
    headerLanguage.style.display = 'none';
    headerNavClose.style.display = 'none';
    // start scroll
    document.body.classList.toggle('no-scroll');
    // scrollController.enabledScroll();
}); 





