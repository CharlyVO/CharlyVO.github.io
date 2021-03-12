const navigationBar = document.getElementById('navigationBar');

const menu = document.getElementById('menu');
const btnMenu = document.getElementById('btnMenu');
const btnExit = document.getElementById('btnExit');

// Funcion para el fondo del menu al hacer Scroll

window.onscroll = () => {
    this.scrollY > 20 ? navigationBar.classList.add('navigationBarSticky') : navigationBar.classList.remove('navigationBarSticky');
}

// Funcion para el menu hamburguesa

btnMenu.addEventListener('click', function () {
    menu.classList.add('showMenu');
    btnMenu.classList.add('hideBtnMenu');
});

btnExit.addEventListener('click', function () {
    menu.classList.remove('showMenu');
    btnMenu.classList.remove('hideBtnMenu');
});