// video

const guysVideoElement = document.querySelector('.guys__video-block');
const screenElement = document.querySelector('.portfolio');
const container = document.querySelector('.container');

const coordVideo = guysVideoElement.getBoundingClientRect();
const coordScreen = screenElement.getBoundingClientRect();
const containerScreen = container.getBoundingClientRect();

// coordScreenWidth = coordScreen.width;
// coordScreenHeight = coordScreen.height

const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

widthVideoElem = coordVideo.width;
heightVideoElem = coordVideo.height;


const videoBlock = function (target) {

    let windowScrollTop = window.pageYOffset;
    // console.log('windowScrollTop: ', windowScrollTop);
    let indexWidth = widthVideoElem + windowScrollTop;
    let indexHeight = heightVideoElem + windowScrollTop;

    let indexWidthScreen = 0;
    let indexHeightScreen = 0;

    // console.log(indexWidth);
    // console.log(coordScreen.top);

    if (windowScrollTop > 10 && windowScrollTop < 1200 && indexWidth * 1.2 <= containerScreen.width) {
        guysVideoElement.classList.add('video-fixed');
        guysVideoElement.classList.remove('video-relative');
        screenElement.classList.remove('portfolio-top');

        guysVideoElement.style.width = indexWidth * 1.2 + 'px';
        guysVideoElement.style.height = indexHeight / 1.1 + 'px';

        guysVideoElement.style.borderRadius = (300 - windowScrollTop / 1.8) + 'px';

        indexWidthScreen = guysVideoElement.getBoundingClientRect().width;
        indexHeightScreen = guysVideoElement.getBoundingClientRect().height;

        
    } else if (indexWidth > containerScreen.width - 200 && windowScrollTop <= 1600) {
        guysVideoElement.classList.remove('video-fixed');
        guysVideoElement.classList.add('video-relative');
        screenElement.classList.remove('portfolio-top');

        guysVideoElement.style.width = 1363 + 'px';
        guysVideoElement.style.height = 852 + 'px';

    } else if (windowScrollTop < 10) {
        guysVideoElement.classList.remove('video-fixed');
        guysVideoElement.classList.remove('video-relative');
        screenElement.classList.remove('portfolio-top');

        guysVideoElement.style.width = widthVideoElem + 'px';
        guysVideoElement.style.height = heightVideoElem + 'px';

    } else if (windowScrollTop > 1600) {
        guysVideoElement.classList.remove('video-fixed');
        guysVideoElement.classList.remove('video-relative');
        screenElement.classList.add('portfolio-top');

    }
};

// run function scrolling the page
window.addEventListener('scroll', function() {
    videoBlock (guysVideoElement);
});

videoBlock (guysVideoElement);
