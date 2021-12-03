const btnChangeColor = document.querySelector('#change__color');
const colorContainer = document.querySelector('#color__container');
const colors = document.querySelectorAll('#color');

/* Mostramos el Contenedor de los conlores */
btnChangeColor.addEventListener('click', () => {
    colorContainer.classList.toggle('color__show');
});

/* Cerramos el Contenedor al hacer Scroll */
window.addEventListener('scroll', () => {
    colorContainer.classList.remove('color__show');
});

/* Cambiamos el Color de los Elementos */
let styleColorTemp;
colors.forEach((item) => item.addEventListener('click', () => {
    let styleColorCurrent = item.getAttribute('title');
    let styleColorAnterior = styleColorTemp;

    document.body.classList.remove(styleColorAnterior);
    document.body.classList.add(styleColorCurrent);

    styleColorTemp = styleColorCurrent;
    colorContainer.classList.remove('color__show');
}));