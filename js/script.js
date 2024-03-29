"use strict"

new WOW().init();

document.addEventListener('DOMContentLoaded', function () {
    
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

    // dropdown language bar
    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

        const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')

        // open/close select
        dropDownBtn.addEventListener('click', function () {
            dropDownList.classList.toggle('dropdown__list--visible');
            // this.classList.add('dropdown__button--active');

            dropDownListItems.forEach(function (listItem) {
                // console.log('listItem: ', listItem.innerHTML);
                const dropdownListLink = listItem.querySelector('.dropdown__list-link');
                if (dropdownListLink.innerHTML === dropDownBtn.innerHTML) {
                    listItem.style.display = 'none';
                }
            }); 
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
            window.scroll({ top: scrollController.scrollPosition })
            document.documentElement.style.scrollBehavior = '';
        },
    }


    // section menu

    const navbar = document.querySelector('.header__wrapper');
    const headerContainer = document.querySelector('.header__container');

    const headerLogo = document.querySelectorAll('.header__logo > path');

    // const headerNavWrap = document.querySelector('.header__nav');
    const headerNav = document.querySelector('.header__nav');

    const headerNavList = document.querySelector('.nav__list');
    const headerNavListItems = document.querySelectorAll('.nav__list > li > a');

    // const headerNavSlogan = document.querySelector('.header__nav-slogan');
    // const headerNavSubmit = document.querySelector('.header__nav__submit');
    const headerSlogan = document.querySelector('.header__nav-slogan');
    const headerSubmit = document.querySelector('.header__nav__submit');

    // const headerNavBtn = document.querySelector('.header__nav-btn');
    const headerBtn = document.querySelector('.header__nav-btn');
    const navIconBtn = document.querySelector('.nav-icon-btn');
    // const iconBtn = document.querySelector('.nav-icon-btn');
    const navCircleItem = document.querySelectorAll('.nav-circle-item');

    const headerNavClose = document.querySelector('.header__nav-close');

    const headerLanguage = document.querySelector('.header__language');
    const dropdownButton = document.querySelector('.dropdown__button');
    const dropdownLink = document.querySelectorAll('.dropdown__list-link');

    // const productsText = document.querySelector('.products__text-animation');
    const productsTextBlock = document.querySelectorAll('.products__text-block');
    const productsTextSecondBlock = document.querySelectorAll('.products__text-second_block');
    const productsImg = document.querySelectorAll('.products__img');
    const productsBtn = document.querySelectorAll('.products__animation-btn-block');
    const productsBgRigh = document.querySelectorAll('.products__description-bg-right');

    const portfolio = document.querySelector('.portfolio');
    const products = document.querySelector('.products');
    const footer = document.querySelector('.footer');

    const footerDecorG = document.querySelector('.footer__decor-item_g');
    const footerDecorA = document.querySelector('.footer__decor-item_a');
    const footerDecorY = document.querySelector('.footer__decor-item_y');
    const footerDecorS = document.querySelector('.footer__decor-item_s');

    const height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    // console.log(height);


    // menu 2 screen
    const menuScreen = function () {
        let windowScrollTop = window.pageYOffset;
        // console.log('windowScrollTop: ', windowScrollTop);
        let coordPortfolioTop = document.querySelector('.portfolio').getBoundingClientRect().top;
        // console.log('coordPortfolioTop: ', coordPortfolioTop);

        if (windowScrollTop > 60 && windowScrollTop < 690) {
            navbar.classList.add('header-opacity');
        } else if (windowScrollTop >= 0 && windowScrollTop <= 60) {
            navbar.classList.remove('header-opacity');
        }

        // if (windowScrollTop > 690 && windowScrollTop <= 1300) {
        if (windowScrollTop > 690 && coordPortfolioTop >= 250) {
            navbar.classList.remove('header-opacity');
            navbar.classList.add('scrolled');

            headerNav.style.display = 'none';
            headerSlogan.style.display = 'block';
            headerSubmit.style.display = 'block';
            headerBtn.style.display = 'block';
            
            headerSubmit.classList.remove('scrolled-back');
            headerSlogan.classList.remove('scrolled-back');


        }
        // else if (windowScrollTop > 1300) {
        else if (coordPortfolioTop < 250 && !headerContainer.classList.contains('header__container-mobile')) {
            navbar.classList.add('scrolled');
            
            headerNav.style.display = 'none';
            headerBtn.style.display = 'block';

            headerSubmit.classList.add('scrolled-back');
            headerSlogan.classList.add('scrolled-back');

            setTimeout(() => {
                headerSubmit.style.display = 'none';
                headerSlogan.style.display = 'none';
            }, 600);
            // console.log('windowScrollTop: ', windowScrollTop);
        } else if (windowScrollTop <= 690) {
            navbar.classList.remove('scrolled');

            headerNav.style.display = 'block';
            headerSlogan.style.display = 'none';
            headerSubmit.style.display = 'none';
            headerBtn.style.display = 'none';

            // headerSubmit.classList.remove('scrolled-back');
            // headerSlogan.classList.remove('scrolled-back');

        }
    }

    // color menu 2 
    const menuColor = function (target) {
        const coordPortfolio = portfolio.getBoundingClientRect();
        const coordProducts = products.getBoundingClientRect();
        const coordFooter = footer.getBoundingClientRect();

        // console.log('coordFooter: ', coordFooter.top);

        if ((coordPortfolio.top < 70 && coordPortfolio.bottom > 50) || (coordProducts.top < 70 && coordProducts.bottom > 50) || (coordFooter.top < 70 && coordFooter.bottom > 50)) {
            headerLogo.forEach(function(logo) {
                logo.style.fill = '#eeeeee';
            });
            navIconBtn.classList.add('nav-icon-btn-white');
            navCircleItem.forEach(function(item) {
                item.classList.add('nav-circle-item-white');
            });
            dropdownButton.classList.add('dropdown__button-white');
            dropdownLink.forEach(function(link) {
                link.classList.add('dropdown__link-active');
            });

        }
        else if (headerContainer.classList.contains('header__container-mobile')) {
            headerLogo.forEach(function(logo) {
                logo.style.fill = '#eeeeee';
            });
        }
        else {
            headerLogo.forEach(function(logo) {
                logo.style.fill = '#151515';
            });
            navIconBtn.classList.remove('nav-icon-btn-white');
            navCircleItem.forEach(function(item) {
                item.classList.remove('nav-circle-item-white');
            });
            dropdownButton.classList.remove('dropdown__button-white');            dropdownLink.forEach(function(link) {
                link.classList.remove('dropdown__link-active');
            });
        }
    } 


    // animat footer

    // const paths = document.querySelectorAll('.footer__decor-item path');

    // for (let i = 0; i < paths.length; i++) {
    //     console.log(`Length ${i + 1} is ${Math.ceil(paths[i].getTotalLength())}`);
    // }

    const footerDecorAnim = function () {

        let coordFooterTop = document.querySelector('.footer').getBoundingClientRect().top;
        // console.log('coordFooterTop: ', coordFooterTop);

        if (coordFooterTop <= 200) {
            footerDecorG.classList.add('footer-anim');
            footerDecorA.classList.add('footer-anim');
            footerDecorY.classList.add('footer-anim');
            footerDecorS.classList.add('footer-anim');
        }

    }

    // run function scrolling the page
    window.addEventListener('scroll', function() {
        menuScreen(navbar);
        menuColor(portfolio);
        footerDecorAnim();
    });

    menuScreen(navbar);
    menuColor(portfolio);
    footerDecorAnim();


    // menu navigation
    headerBtn.addEventListener('click', () => {
        headerContainer.classList.add('header__container-mobile');
        
        headerSubmit.style.display = 'none';
        headerSlogan.style.display = 'none';
        headerNav.style.display = 'block';

        navIconBtn.style.display = 'none';
        headerLanguage.style.display = 'block';
        headerNavClose.style.display = 'block';

        headerNavList.classList.add('black-bg');
        headerLogo.forEach(function(logo) {
            logo.style.fill = '#eeeeee';
        });
        // stop scroll
        // document.body.classList.toggle('no-scroll');
        scrollController.disabledScroll();

        headerNavListItems.forEach(function (item) {
            item.addEventListener('click', () => {
                headerContainer.classList.remove('header__container-mobile');
                headerSubmit.style.display = 'block';
                headerSlogan.style.display = 'block';
                headerNav.style.display = 'none';
        
                navIconBtn.style.display = 'flex';
                // headerLanguage.style.display = 'none';
                headerNavClose.style.display = 'none';
        
                headerNavList.classList.remove('black-bg');
                headerLogo.forEach(function(logo) {
                    logo.style.fill = '#151515';
                });

                // if (item.classList.contains('nav__link4') || item.classList.contains('nav__link5')) {
                //     productsText.style.top = '0vh';

                for (let i = 0; i < productsTextBlock.length; i++){
                    productsTextSecondBlock[i].classList.remove('products__text-second_block-open');

                    productsImg[i].classList.remove(`img-right${i}`);

                    productsBtn[i].classList.remove(`btn-block_right${i}`);

                    productsBgRigh[i].classList.remove(`bg-right${i}`);

                }
                // }

                // start scroll
                // document.body.classList.remove('no-scroll');
                scrollController.enabledScroll();
            });
        });
    });

    headerNavClose.addEventListener('click', () => {
        headerContainer.classList.remove('header__container-mobile');
        headerSubmit.style.display = 'block';
        headerSlogan.style.display = 'block';
        headerNav.style.display = 'none';

        navIconBtn.style.display = 'flex';
        // headerLanguage.style.display = 'none';
        headerNavClose.style.display = 'none';

        headerNavList.classList.remove('black-bg');
        headerLogo.forEach(function(logo) {
            logo.style.fill = '#151515';
        });


        for (let i = 0; i < productsTextBlock.length; i++){
            productsTextSecondBlock[i].classList.remove('products__text-second_block-open');

            productsImg[i].classList.remove(`img-right${i}`);

            productsBtn[i].classList.remove(`btn-block_right${i}`);

            productsBgRigh[i].classList.remove(`bg-right${i}`);

        }
        // start scroll
        // document.body.classList.toggle('no-scroll');
        scrollController.enabledScroll();
    });
    
    

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



    // button scroll up
    const offset = 100;
    const scrollUp = document.querySelector('.scroll-up');
    const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
    const pathLength = scrollUpSvgPath.getTotalLength();

    scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    // updateDashoffset
    const updateDashoffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const dashoffset = pathLength - (getTop() * pathLength / height);

        scrollUpSvgPath.style.strokeDashoffset = dashoffset;

    };

    // onScroll
    window.addEventListener('scroll', () => {
        updateDashoffset();

        if (getTop() > offset) {
            scrollUp.classList.add('scroll-up--active');
        } else {
            scrollUp.classList.remove('scroll-up--active');
        }
    });

    // click
    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    
    // smooth scroll a href='#'
    // const ahrefs = document.querySelectorAll('a[href*="#"]');

    // for (let ahref of ahrefs) {
    //     ahref.addEventListener('click', function (e) {

    //         if (!headerContainer.classList.contains('header__container-mobile')) {
    //             e.preventDefault();
            
    //             const blockId = ahref.getAttribute('href');
    //             document.querySelector('' + blockId).scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    
    //         }

    //     });
    // }

    // headerNavListItems.forEach(function (item) {
    //     item.addEventListener('click', () => {
        
    //         for (let i = 0; i < productsTextBlock.length; i++){
    //             productsTextSecondBlock[i].classList.remove('products__text-second_block-open');
    
    //             productsImg[i].classList.remove(`img-right${i}`);
    
    //             productsBtn[i].classList.remove(`btn-block_right${i}`);
    
    //             productsBgRigh[i].classList.remove(`bg-right${i}`);
    
    //         }
    //     });
    // });

    // for (let item of headerNavListItems) {
    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
            
    //         for (let i = 0; i < productsTextBlock.length; i++){
    //             productsTextSecondBlock[i].classList.remove('products__text-second_block-open');
    
    //             productsImg[i].classList.remove(`img-right${i}`);
    
    //             productsBtn[i].classList.remove(`btn-block_right${i}`);
    
    //             productsBgRigh[i].classList.remove(`bg-right${i}`);
    
    //         }
    //     });
    // }



    // if (headerContainer.classList.contains('header__container-mobile')) {
    //     console.log(item);

    //     headerNavListItems.forEach(function (item) {

    //         item.addEventListener('click', () => {
    //             headerContainer.classList.remove('header__container-mobile');
    //             headerNavSubmit.style.display = 'block';
    //             headerNavSlogan.style.display = 'block';
    //             headerNavWrap.style.display = 'none';
        
    //             navIconBtn.style.display = 'flex';
    //             // headerLanguage.style.display = 'none';
    //             headerNavClose.style.display = 'none';
        
    //             headerNavList.classList.remove('black-bg');
    //             headerLogo.forEach(function(logo) {
    //                 logo.style.fill = '#151515';
    //             });
    //             // start scroll
    //             document.body.classList.remove('no-scroll');
    //             // scrollController.enabledScroll();
    //         });
    //     });
    // }



    // video

    // const videoBlock = document.querySelector('.guys__video-block');
    // const video = document.querySelector('.video');
    // // const arrowPause = document.querySelector('.arrow-right');

    // videoBlock.addEventListener('click', ()=>{
    //     if (video.paused) {
    //         video.play();
    //         guysVideoElement.setAttribute("title", "Pause");
    //         // arrowPause.classList.toggle('arrow-right-pause');
    //     }
    //     else {
    //         video.pause();
    //         guysVideoElement.setAttribute("title", "Play");
    //         // arrowPause.classList.toggle('arrow-right-pause');
    //     }
    // });
    

});
