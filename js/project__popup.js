const btnProjectDetails = document.querySelectorAll('#btn__project');
const btnClosePopUp = document.querySelector('#btn__closePopup');
const popUpContainer = document.querySelector('#popup__project');

/* Show Project PopUp */
function toggleProjectPopUP() {
    document.body.classList.toggle('hide__scrollbar');
    popUpContainer.classList.toggle('show__popup');
}

/* Show Current Project Details */
function currentItemDetails(currentItem) {
    /* Project Image */
    document.querySelector('.popup__img img').src = currentItem.querySelector('.item__img img').src;

    /* Project Title */
    document.querySelector('.popup__title').innerHTML = currentItem.querySelector('.item__title').innerHTML;

    /* Project Description */
    document.querySelector('.popup__description').innerHTML = currentItem.querySelector('.item__details .description p').innerHTML;

    /* Project Details */
    document.querySelector('.popup__details').innerHTML = currentItem.querySelector('.general__info').innerHTML;
}

btnProjectDetails.forEach((button) => button.addEventListener('click', () => {
    toggleProjectPopUP();

    /* Obtenemos la Informacion del Proyecto que corresponde al boton */
    let currentItemTitle = button.getAttribute('title');
    console.log(currentItemTitle);
    let currentItem = document.querySelector(`.${currentItemTitle}`);
    console.log(currentItem);

    currentItemDetails(currentItem);
}));

btnClosePopUp.addEventListener('click', toggleProjectPopUP);