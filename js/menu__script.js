const navBar = document.querySelector('#nav__bar');
const navItems = document.querySelectorAll('#nav__item');
const sections = document.querySelectorAll('.section');
const navMenu = document.querySelector('#nav__menu');
const btnOpenMenu = document.querySelector('#btn__openMenu');
const btnCloseMenu = document.querySelector('#btn__closeMenu');

/* *********************
    Navigation Sticky Bar
     ********************* */
window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add('sticky__bar') : navBar.classList.remove('sticky__bar');
}

/* ******************
    Indicador del Menu
     ****************** */
function activedLink () {
    navItems.forEach((item) => item.classList.remove('actived__link'));
    this.classList.add('actived__link');
}

navItems.forEach((item) => item.addEventListener('click', activedLink));

/* ****************************************
    Cambiar el indicador a la seccion actual 
     **************************************** */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const idCurrentSection = entry.target.id;
            const currentLink = document.querySelector(`.nav__list .${idCurrentSection}`);
            const lastLink = document.querySelector('.actived__link');
            
            lastLink.classList.remove('actived__link');
            currentLink.classList.add('actived__link');

            console.log(lastLink);
            console.log(currentLink);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
});

sections.forEach((section) => observer.observe(section));

/* **********************************
    Abrimos Menu en Pantallas Pequeñas
     ********************************** */
btnOpenMenu.addEventListener('click', () => {
    navMenu.classList.add('show__menu');
    btnOpenMenu.classList.add('hide__button');

    /* Si esta abierto el contenedor de los colores, cierralo */
    styleSwitcher.classList.remove('show__colors');
});

btnCloseMenu.addEventListener('click', () => {
    navMenu.classList.remove('show__menu');
    btnOpenMenu.classList.remove('hide__button');
});

/* Cerramos el Menu al dar click en algun link */
navItems.forEach((item) => item.addEventListener('click', () => {
    navMenu.classList.remove('show__menu');
    btnOpenMenu.classList.remove('hide__button');
}));