const navBar = document.querySelector('#nav__bar');
const navMenu = document.querySelector('#nav__menu');
const navItems = document.querySelectorAll('#nav__item');
const btnOpenMenu = document.querySelector('#btn__open-menu');
const btnCloseMenu = document.querySelector('#btn__close-menu');

/* Funcion para cambiar el color de la barra de navegacion */
window.onscroll = () => {
    if(!navBar.classList.contains('nav__dark-mode')) {
        this.scrollY > 20 ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');
    }
}

/* Mostramos el Menu */
btnOpenMenu.addEventListener('click', () => {
    navMenu.classList.add('show__menu');
    btnOpenMenu.classList.add('hide__btn');
});

/* Ocultamos el Menu */
btnCloseMenu.addEventListener('click', () => {
    navMenu.classList.remove('show__menu');
    btnOpenMenu.classList.remove('hide__btn');
});

/* Cerrar Menu al Navegar */
navItems.forEach((item) => item.addEventListener('click', () => {
    navMenu.classList.remove('show__menu');
    btnOpenMenu.classList.remove('hide__btn');
}));

/* Cambiamos el Indicador del Menu al hacer Scroll */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const idCurrentSection = entry.target.id;
        const currentLink = document.querySelector(`.nav__list .${idCurrentSection}`);

        if (entry.isIntersecting) {
            document.querySelector('.actived__link').classList.remove('actived__link');
            currentLink.classList.add('actived__link');
            console.log(currentLink);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.8
});

const sections = document.querySelectorAll('.section');
sections.forEach((section) => observer.observe(section));