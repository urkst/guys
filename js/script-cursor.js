document.addEventListener('DOMContentLoaded', function () {
    // const body = document.getElementsByTagName('body');
    // cx = window.innerWidth / 2;
    // cy = window.innerHeight / 2;

    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('aura');
    const portfolio = document.querySelector('.portfolio');

    const links = document.querySelectorAll('.portfolio__link');

    const portfolioBtns = document.querySelectorAll('.portfolio__slider-btn');

    const images = document.querySelectorAll('div.portfolio__slider-img > img');

    mouseX = 0;
    mouseY = 0;
    posX = 0;
    posY = 0;

    function mouseCoords(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

        // console.log(e.pageX + '/' + e.pageY);
    }

    // function animate(element) {
    //     transition.begin(element, ["clip-path", "polygon(45% 50%, 0% 0%, 0% 0%, 0% 1%, 10% 6%, 18% 0, 28% 6%, 38% 0, 47% 5%, 58% 0, 68% 5%, 78% 0, 88% 5%, 100% 0%, 98% 19%, 96% 35%, 95% 50%, 96% 63%, 98% 83%, 100% 100%, 89% 96%, 78% 100%, 68% 95%, 58% 100%, 48% 95%, 37% 100%, 28% 95%, 18% 100%, 9% 95%, 0 100%, 3% 85%, 5% 69%, 6% 51%, 5% 35%, 3% 19%, 0% 0%, 0% 0%, 0 0)"]);
    // }

    portfolio.addEventListener('mousemove', e => {
        
        clientX = e.pageX;
        clientY = e.pageY;

        // console.log(e.pageX + ':' + e.pageY);

        // request = requestAnimationFrame(updateMe);

        mouseCoords(e);

        cursor.style.display = 'block';
        follower.style.display = 'block';
        // cursor.classList.remove('cursor-hidden');
        // follower.classList.remove('cursor-hidden');

        for (let i = 0; i < images.length; i++) {

            images[i].addEventListener('mouseover', () => {
            
                images[i].classList.add('poligon' + i);
                // animate(images[i]);
                
            });

            images[i].addEventListener('mouseout', () => {
            
                images[i].classList.remove('poligon' + i);
            });
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

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });

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
            cursor.classList.add('cursor_active');
            follower.classList.add('cursor_active');
        });

        links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('cursor_active');
            follower.classList.remove('cursor_active');
        });
    }

    for (let i = 0; i < portfolioBtns.length; i++) {

        portfolioBtns[i].addEventListener('mouseover', () => {
            cursor.classList.add('cursor_active');
            follower.classList.add('cursor_active');
        });

        portfolioBtns[i].addEventListener('mouseout', () => {
            cursor.classList.remove('cursor_active');
            follower.classList.remove('cursor_active');
        });
    }
    

    portfolio.addEventListener('mouseout', () => {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        // cursor.classList.add('cursor-hidden');
        // follower.classList.add('cursor-hidden');
    });

});
