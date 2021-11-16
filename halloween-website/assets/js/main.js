/*=============== SHOW MENU ===============*/
const header = document.querySelector('header');
const nav = document.querySelector('.nav_menu');
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
        if(sectionId == 'about'){
            
        }
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav_menu a[href='#${sectionId}']`).classList.add('nav_active')
        } else {
            document.querySelector(`.nav_menu a[href='#${sectionId}']`).classList.remove('nav_active')
        };
    })
});

/*=============== NEW SWIPER ===============*/
const swiper = new Swiper('.swiper-arrivals', {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween : 19
    
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
ScrollReveal().reveal(`.swiper-home, .category_content, .trick_content, .new-swiper, .news, .newsletter  `, {
    origin: 'top',
    distance: '70px',
    duration: 3000,
    delay: 500,
});
ScrollReveal().reveal(`.category_content, .trick__content, .footer_content`, {
    interval: 900,
    origin: 'top',
    distance: '70px',
    duration: 3000,
    delay: 500,
});
ScrollReveal().reveal(`.about_content, .discount_content_img`, {
    origin: 'left',
    distance: '50px',
    duration: 2500,
    delay: 400,
});
ScrollReveal().reveal(`.about_img, .discount_txt`, {
    origin: 'right',
    distance: '50px',
    duration: 2500,
    delay: 400,
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.querySelector('.scroll');
window.addEventListener('scroll', () => {
    window.scrollY >= 500 ? scrollUp.classList.add('scroll_show') : scrollUp.classList.remove('scroll_show')
});


