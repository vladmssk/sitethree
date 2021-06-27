window.addEventListener('DOMContentLoaded' , function(){



    const swiper = new Swiper('.swiper-container', {

        simulateTouch: false,
        loop: true,
        speed: 500,
        initialSlide: 1,

        autoplay:{
            delay:3000,
        },


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },

    });


    const menuIcon = document.querySelector('.menu__icon'),
        body = document.querySelector('body')
        nav = document.querySelector('.nav'),
        menuLinks = document.querySelectorAll('.header__li'),
        arrows = document.querySelectorAll('.arrow'),
        subMenu = document.querySelectorAll('.sub-menu');


        menuIcon.addEventListener('click' , function(){
            body.classList.toggle('lock');
            menuIcon.classList.toggle('_active');
            nav.classList.toggle('_active');
        });


        menuLinks.forEach((menuLink) => {
            menuLink.addEventListener('click' , () => {

                // arrows.forEach((arrow) => {
                //     arrow.classList.toggle('_active');
                //     console.log(arrow);
                // });
                for(let i = 0; i < arrows.length; i++){
                    arrows[i].classList.toggle('_active');
                }
                // subMenu.forEach((subOneMenu) => {
                //     subOneMenu.classList.toggle('_active');
                // });
                for(let i = 0; i < subMenu.length; i++){
                    subMenu[i].classList.toggle('_active');
                }
                
            });
        });

});


