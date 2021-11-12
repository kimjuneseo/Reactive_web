/*=============== SHOW MENU ===============*/
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const showMenu_btn = document.querySelector('.show_menu');
const hiddenMenu_btn = document.querySelector('.hidden_menu');
const menu = document.querySelectorAll('.menu>div');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
showMenu_btn.addEventListener('click', () => {
    nav.style.height = '400px';
})


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
hiddenMenu_btn.addEventListener('click', () => {
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
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    scrollY >= 10 ? header.classList.add('header_background') : header.classList.remove('header_background')

    sections.forEach(el => {
        const sectionHeight = el.offsetHeight;
        const sectionTop = el.offsetTop - 56;
        const sectionId = el.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav_menu a[href='#${sectionId}']`).classList.add('nav_active')
        } else {
            document.querySelector(`.nav_menu a[href='#${sectionId}']`).classList.remove('nav_active')
        }
    })
});

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