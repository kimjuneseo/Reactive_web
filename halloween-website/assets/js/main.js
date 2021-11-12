const nav = document.querySelector('.nav');
const showMenu = document.querySelector('.show_menu');
const hiddenMenu = document.querySelector('.hidden_menu');

/*=============== SHOW MENU ===============*/
window.addEventListener('scroll', (e) => {
    console.log(e);
})

/*===== MENU SHOW =====*/
/* Validate if constant exists */
showMenu.addEventListener('click', () => {
    nav.style.height = '400px'
})
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
hiddenMenu.addEventListener('click', () => {
    nav.style.height = 0;
})


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper('.swiper-home', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== NEW SWIPER ===============*/
const swiper = new Swiper('.swiper-arrivals', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination1',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
