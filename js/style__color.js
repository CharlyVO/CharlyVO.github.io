const styleSwitcher = document.querySelector('#style__switcher');
const btnStyleColor = document.querySelector('#btn__styleColor');
const colors = document.querySelectorAll('.color');

/* ***********
    Style Color
     *********** */
btnStyleColor.addEventListener('click', () => {
    styleSwitcher.classList.toggle('show__colors'); 
});

window.addEventListener('scroll', () => {
    styleSwitcher.classList.remove('show__colors');
});

let temp;
colors.forEach((color) => color.addEventListener('click', () => {
    let idCurrentColor = color.getAttribute('id');
    let idLastColor = temp;

    document.body.classList.remove(idLastColor)
    document.body.classList.add(idCurrentColor);

    temp = idCurrentColor;

    console.log(idLastColor);
    console.log(idCurrentColor);

    styleSwitcher.classList.remove('show__colors');
}));