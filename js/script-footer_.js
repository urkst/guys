
const footerSect = document.querySelector('.footer');

const footerContent = document.querySelector('.footer__content-items');
const footerDecor = document.querySelector('.footer__decor');

let flagFooterTop = true; 

function scrollFooter(footerDecorTop) {

    if (footerDecorTop <= window.innerHeight && flagFooterTop) {

        animateFooterContentOpen(footerContent);
        flagFooterTop = false;
    }
    
    else if (footerDecorTop >= window.innerHeight && !flagFooterTop) {
        
        animateFooterContentClose(footerContent);
        flagFooterTop = true; 
        
    }
}

function animateFooterContentOpen(footerContent) {
    transition.begin(footerContent, [
        "transform translate(0,0) translate(0,-420px) .8s ",
        "opacity 0 1 1s linear"
    ]);
}

function animateFooterContentClose(footerContent) {
    transition.begin(footerContent, [
        "transform translate(0,-420px) translate(0,0) .8s ",
        "opacity 1 0 1s linear"
    ]);
}


document.addEventListener('scroll', function () {

    let coordFooterDecor = footerDecor.getBoundingClientRect();
    
    scrollFooter(coordFooterDecor.top);
});


