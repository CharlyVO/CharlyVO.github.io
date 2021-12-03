const navBar = document.querySelector('#nav__bar');
const navMenu = document.querySelector('#nav__menu');
const navItems = document.querySelectorAll('#nav__item');
const btnOpenMenu = document.querySelector('#btn__open-menu');
const btnCloseMenu = document.querySelector('#btn__close-menu');

/* Funcion para dejar efecto hover en el link actual */
function activedLink() {
    navItems.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered');
}

navItems.forEach((item) => item.addEventListener('mouseover', activedLink));


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