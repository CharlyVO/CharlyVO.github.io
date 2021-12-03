const btnDarkMode = document.querySelector('#btn__dark-mode');
const btnLightMode = document.querySelector('#btn__light-mode');

/* Activamos Modo Oscuro */
btnDarkMode.addEventListener('click', () => {
    /* Cambio los colores de las variables del :root */
    document.body.classList.add('dark__mode');

    /* Cambio el Boton Actual */
    btnDarkMode.style.visibility = "hidden";
    btnLightMode.style.visibility = "visible";
});

/* Activamos Modo de Luz */
btnLightMode.addEventListener('click', () => {
    /* Cambio los colores de las variables del :root */
    document.body.classList.remove('dark__mode');

    /* Cambio el Boton Actual */
    btnDarkMode.style.visibility = "visible";
    btnLightMode.style.visibility = "hidden";
});




