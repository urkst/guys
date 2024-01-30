
const animatClientsItems = document.querySelectorAll('._animat-client');

if (animatClientsItems.length > 0) {

    window.addEventListener('scroll', animatOnScroll);

    function animatOnScroll() {
        for (let i = 0; i < animatClientsItems.length; i++){
            const animatItem = animatClientsItems[i];
            const animatItemHeight = animatItem.offsetHeight;
            const animatItemOffset = offset(animatItem).top;
            const animatStart = 4;

            let animatItemPoint = window.innerHeight - animatItemHeight / animatStart;

            if (animatItemHeight > window.innerHeight) {
                animatItemPoint = window.innerHeight - window.innerHeight / animatStart;
            }

            if ((pageYOffset > animatItemOffset - animatItemPoint) && pageYOffset < (animatItemOffset + animatItemHeight)) {

                setTimeout(() => {
                    animatItem.classList.add('_active-animat-client');
                }, 100);
                
            } else {
                if (!animatItem.classList.contains('_animat-no-hide-client')) {
                    animatItem.classList.remove('_active-animat-client');
                }
            }
        }
    }

    // функция получения отступа сверху
    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
}
