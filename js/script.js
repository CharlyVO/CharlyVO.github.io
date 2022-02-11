/***** Preloader Effect Starts *****/
document.body.classList.add('hide__scrollbar');

setTimeout(function() {
    document.querySelector('#preloader').classList.add('hide__preloader');
    document.body.classList.remove('hide__scrollbar');
}, 3300);
/***** Preloader Effect Ends *****/

/***** Sticky Navigation Bar Starts *****/
const navBar = document.querySelector('#nav__bar');

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add('sticky__bar') : navBar.classList.remove('sticky__bar');
}
/***** Sticky Navigation Bar Ends *****/

/***** Show Navigation Menu Starts *****/
const navMenu = document.querySelector('#nav__menu');
const btnOpenMenu = document.querySelector('#open__menu');

function toggleNavMenu() {
    navMenu.classList.toggle('show__menu');
    btnOpenMenu.classList.toggle('hide');
}

btnOpenMenu.addEventListener('click', toggleNavMenu);
document.querySelector('#close__menu').addEventListener('click', toggleNavMenu);

const navLinks = document.querySelectorAll('.nav__menu #nav__item');
navLinks.forEach((link) => link.addEventListener('click', toggleNavMenu));
/***** Show Navigation Menu Ends *****/

/***** Current Section Menu Indicator Starts *****/
const documentSections = document.querySelectorAll('.section__indicator');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let lastActiveLink = document.querySelector('.nav__menu .active__link');
            console.log(lastActiveLink);
            let currentSectionName = entry.target.id;
            console.log(currentSectionName);
            let currentSectionLink = document.querySelector(`.nav__menu a[href="${currentSectionName}"]`);
            console.log(currentSectionLink);

            lastActiveLink.classList.remove('active__link');
            currentSectionLink.classList.add('active__link');
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});

documentSections.forEach((section) => observer.observe(section));
/***** Current Section Menu Indicator Ends *****/

/***** Style Switcher Starts *****/
const styleSwitcher = document.querySelector('#style__switcher');

document.querySelector('#btn__switcher').addEventListener('click', () => {
    styleSwitcher.classList.toggle('show__colors');
    navMenu.classList.remove('show__menu');
    btnOpenMenu.classList.remove('hide');
});

window.addEventListener('scroll', () => {
    styleSwitcher.classList.remove('show__colors');
});

const colors = document.querySelectorAll('.color');

let temp;
function changeStyleColor() {
    let lastStyleColor = temp;
    console.log(lastStyleColor);
    let currentStyleColor = this.getAttribute('id');
    console.log(currentStyleColor);

    document.body.classList.remove(lastStyleColor);
    document.body.classList.add(currentStyleColor);
    temp = currentStyleColor;
}

colors.forEach((color) => color.addEventListener('click', changeStyleColor));
/***** Style Switcher Ends *****/

/***** PopUp Project Details Starts *****/
const popUpSection = document.querySelector('#popup__section');
const projectButtons = document.querySelectorAll('.btn__project');

function togglePopUpSection() {
    popUpSection.classList.toggle('show__popup');
    document.body.classList.toggle('hide__scrollbar');
}

projectButtons.forEach((button) => button.addEventListener('click', () => {
    togglePopUpSection();

    let currentProjectName = button.getAttribute('id');
    console.log(currentProjectName);
    let currentProject = document.querySelector(`#${currentProjectName}`);
    console.log(currentProject);

    popUpSection.querySelector('.popup__image img').src = currentProject.querySelector('.project__image img').src;
    popUpSection.querySelector('.popup__title').innerHTML = currentProject.querySelector('.project__title').innerHTML;
    popUpSection.querySelector('.popup__description').innerHTML = currentProject.querySelector('.general__info .description').innerHTML;
    popUpSection.querySelector('.popup__details').innerHTML = currentProject.querySelector('.general__info .details').innerHTML;
}));

document.querySelector('#close__popup').addEventListener('click', togglePopUpSection);
/***** PopUp Project Details Ends *****/