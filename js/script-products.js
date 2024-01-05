
const products = document.querySelector('.products');
const productsText = document.querySelector('.products__text-animation');
const productsTextFirstBlock = document.querySelector('.products__text-first_block');
const productsTextSecondBlock = document.querySelector('.products__text-second_block');
const productsTextThirdBlock = document.querySelector('.products__text-third_block');

let isAnimationRunning1 = true;
let isAnimationRunning2 = true;
let isAnimationRunning3 = true;
let isAnimationRunning4 = true;
let isAnimationRunning5 = true;
let isAnimationRunning6 = true;

function animate1(productsTextFirstBlock) {
    transition.begin(productsTextFirstBlock, [
        "transform translateY(0) translateY(-350px) 1s ease-in-out",
        "opacity 0 1 2s linear"
    ]);
    isAnimationRunning1 = false;
}

function animate2(productsTextFirstBlock) {
    transition.begin(productsTextFirstBlock, [
        "transform translateY(-350px) translateY(-870px) 1s ease-in-out",
        "opacity 0 1 2s linear"
    ]);
    isAnimationRunning2 = false;
}

function animate3(productsTextThirdBlock) {
    transition.begin(productsTextThirdBlock, [
        "transform translateY(0px) translateY(-970px) 1s ease-in-out",
        "opacity 0 1 2s linear"
    ]);
    isAnimationRunning3 = false;
}

function animate4(productsTextSecondBlock) {
    transition.begin(productsTextSecondBlock, [
        "transform translateY(0) translateY(-970px) 1s ease-in-out",
        "opacity 0 0 1s linear"
    ]);
    isAnimationRunning4 = false;
}

function animate5(productsTextSecondBlock) {
    transition.begin(productsTextSecondBlock, [
        "transform translateY(-970px) translateY(-870px) 1s ease-in-out scale(1) 1s ease-in-out 1.2",
        "opacity 0 1 1s linear 1.2s"
    ]);
    isAnimationRunning5 = false;
}

function animate6(productsTextThirdBlock) {
    transition.begin(productsTextThirdBlock, [
        "transform translateY(-970px) translateY(-870px) 1s ease-in-out 1s",
        "opacity 0 1 1s linear 1s"
    ]);
    isAnimationRunning6 = false;
}

const productsBlock = function (target) {

    let windowScrollTop = window.pageYOffset;
    const coordProducts = products.getBoundingClientRect();
    const coordProductsText = productsText.getBoundingClientRect();

    console.log('coordProducts-top: ', coordProducts.top);
    console.log('coordProductsText-bottom: ', coordProductsText.bottom);
    console.log('windowScrollTop: ', windowScrollTop);

    if (coordProducts.top >= 200 && coordProducts.top < 300 && isAnimationRunning1 && isAnimationRunning4) {
        animate1(productsTextFirstBlock);
        animate4(productsTextSecondBlock);
    }
    else if (coordProducts.top >= 100 && coordProducts.top < 200 && isAnimationRunning2) {
        animate2(productsTextFirstBlock);
        animate3(productsTextThirdBlock);
        animate6(productsTextThirdBlock)
        animate5(productsTextSecondBlock);
    } else if (coordProducts.top < 100 && isAnimationRunning1 && isAnimationRunning4) {
        animate1(productsTextFirstBlock);
        animate4(productsTextSecondBlock);
    }
}

window.addEventListener('scroll', function() {
    productsBlock (productsTextFirstBlock, productsTextThirdBlock, productsTextSecondBlock);
});

productsBlock (productsTextFirstBlock, productsTextThirdBlock, productsTextSecondBlock);

