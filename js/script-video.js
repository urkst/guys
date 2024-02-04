// video

const guysVideoElement = document.querySelector('.guys__video-block');
// const screenElement = document.querySelector('.portfolio');
const portfolio = document.querySelector('.portfolio');
const container = document.querySelector('.container');
const guysBtn = document.querySelector('.guys__slider-btn');
const arrow = guysBtn.querySelector('.arrow-right');
const guysBorder = document.querySelector('.guys__content-border');


const coordVideo = guysVideoElement.getBoundingClientRect();
// const coordScreen = screenElement.getBoundingClientRect();
const containerScreen = container.getBoundingClientRect();
const coordGuysBtn = guysBtn.getBoundingClientRect();
const coordArrow = arrow.getBoundingClientRect();

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let widthVideoElem = coordVideo.width;
let heightVideoElem = coordVideo.height;
let widthBtn = coordGuysBtn.width;
let heightBtn = coordGuysBtn.height;
let arrowWidth = coordArrow.width;
let arrowHeight = coordArrow.height;

// let playActive = true;


const videoBlockScroll = function (target) {

    let windowScrollTop = window.pageYOffset;
    // console.log('windowScrollTop: ', windowScrollTop);
    const coordPortfolio = portfolio.getBoundingClientRect();
    // console.log('coordPortfolio: ', coordPortfolio.top);
    const coordVideo = guysVideoElement.getBoundingClientRect();
    // console.log('coordVideo: ', coordVideo.top);


    let indexWidth = widthVideoElem + windowScrollTop;
    let indexHeight = heightVideoElem + windowScrollTop;

    let indexWidthBtn = widthBtn + windowScrollTop;
    let indexHeightBtn = heightBtn + windowScrollTop;

    let indexArrowWidth = arrowWidth + windowScrollTop; 
    let indexArrowHeight = arrowHeight + windowScrollTop; 


    if (windowScrollTop > 10 && windowScrollTop < 1200 && indexWidth * 1.3 <= containerScreen.width - 30) {
        guysVideoElement.classList.add('video-fixed');
        guysVideoElement.classList.remove('video-relative');
        portfolio.classList.remove('portfolio-top');

        guysVideoElement.style.width = (indexWidth * 1.3) + 'px';
        if (indexHeight < windowHeight - 150) {
            guysVideoElement.style.height = indexHeight + 'px';
            // console.log('indexHeight: ', indexHeight);    
        }


        if (windowScrollTop > 10 && windowScrollTop < 200) {
            guysBorder.style.display = 'block';
        } else if (windowScrollTop >= 200 && windowScrollTop < 1200) {
            guysBorder.style.display = 'none';
        }

        if (guysVideoElement.style.borderRadius.slice(0, 2).replace(/[^\d]/g, '') > 30) {
            guysVideoElement.style.borderRadius = (300 - (windowScrollTop / 1.2)) + 'px';
        } else if (guysVideoElement.style.borderRadius.slice(0, 2).replace(/[^\d]/g, '') <= 30) {
            guysVideoElement.style.borderRadius = '30px'
        }

        
        guysBtn.style.width = (widthBtn + (indexWidthBtn * 0.05)) + 'px';
        guysBtn.style.height = (heightBtn + (indexHeightBtn * 0.05)) + 'px';

        arrow.style.width = (arrowWidth + (indexArrowWidth * 0.015)) + 'px';
        arrow.style.height = (arrowHeight + (indexArrowHeight * 0.015)) + 'px';

        // if (playActive) {
        //     arrow.style.borderToptWidth = (indexArrowWidth * 0.006) + 'px';
        // } else {
        //     arrow.style.borderRightWidth = (indexArrowWidth * 0.006) + 'px';
        // }

        arrow.style.borderRightWidth = (indexArrowWidth * 0.006) + 'px';
        arrow.style.borderBottomWidth = (indexArrowWidth * 0.006) + 'px';
        
    }
    
    else if (indexWidth > containerScreen.width - 200 && coordPortfolio.top > windowHeight / 2) {
        // console.log('windowHeight: ', windowHeight);
        guysVideoElement.classList.remove('video-fixed');
        guysVideoElement.classList.add('video-relative');
        portfolio.classList.remove('portfolio-top');
        guysBorder.style.display = 'none';

        if (guysVideoElement.style.borderRadius.slice(0, 2).replace(/[^\d]/g, '') > 30) {
            guysVideoElement.style.borderRadius = (300 - (windowScrollTop / 1.2)) + 'px';
        } else if (guysVideoElement.style.borderRadius.slice(0, 2).replace(/[^\d]/g, '') <= 30) {
            guysVideoElement.style.borderRadius = '30px'
        }

        if (windowWidth > containerScreen.width) {
            guysVideoElement.style.width = (containerScreen.width - 30) + 'px';
            guysVideoElement.style.height = (windowHeight - 150) + 'px';
        } else {
            guysVideoElement.style.width = (windowWidth - 30) + 'px';
            guysVideoElement.style.height = (windowHeight - 220) + 'px';
        }

        guysBtn.style.width = 46 + 'px';
        guysBtn.style.height = 46 + 'px';

        arrow.style.width = 13 + 'px';
        arrow.style.height = 13 + 'px';

        // if (playActive) {
        //     arrow.style.borderTopWidth = 3.6 + 'px';
        // } else {
        //     arrow.style.borderRightWidth = 3.6 + 'px';
        // }

        arrow.style.borderRightWidth = 3.6 + 'px';
        arrow.style.borderBottomWidth = 3.6 + 'px';

        // guysVideoElement.style.opacity = 1; 

    }
    
    else if (windowScrollTop < 10) {
        guysVideoElement.classList.remove('video-fixed');
        guysVideoElement.classList.remove('video-relative');
        portfolio.classList.remove('portfolio-top');
        guysBorder.style.display = 'block';

        guysVideoElement.style.width = widthVideoElem + 'px';
        guysVideoElement.style.height = heightVideoElem + 'px';

        guysVideoElement.style.borderRadius = 300 + 'px'

        guysBtn.style.width = widthBtn + 'px';
        guysBtn.style.height = heightBtn + 'px';

        arrow.style.width = arrowWidth + 'px';
        arrow.style.height = arrowHeight + 'px';


    } else if (coordPortfolio.top < windowHeight / 4) {
        guysVideoElement.classList.remove('video-fixed');
        guysVideoElement.classList.remove('video-relative');

        // guysVideoElement.style.opacity = 0; 

        portfolio.classList.add('portfolio-top');
        portfolio.style.top = - windowHeight / 2 + 'px';
        guysBorder.style.display = 'none';

        guysVideoElement.style.borderRadius = 300 + 'px';
        // console.log(windowScrollTop);
    } 
};

// run function scrolling the page
window.addEventListener('scroll', function() {
    videoBlockScroll(guysVideoElement);
});

videoBlockScroll(guysVideoElement);



// const videoBlock = document.querySelector('.guys__video-block');
const video = document.querySelector('.video');
// const arrowPause = document.querySelector('.arrow-right');

// videoBlock.addEventListener('click', ()=>{
guysVideoElement.addEventListener('click', ()=>{
    if (video.paused) {
        playActive = true;
        video.play();
        guysVideoElement.setAttribute("title", "Pause");
        // arrowPause.classList.add('arrow-right-pause');
        // arrowPause.classList.remove('arrow-right');
    }
    else {
        playActive = false;
        video.pause();
        guysVideoElement.setAttribute("title", "Play");

        // arrowPause.classList.remove('arrow-right-pause');
        // arrowPause.classList.add('arrow-right');
    }
});
