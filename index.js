const mediaQuery = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.playlist');
const hamburgerButton = document.querySelector('.hamburger_menu');

mediaQuery.addListener(validations);

function validations(e) {
  e.matches
    ? hamburgerButton.addEventListener('click', hideShow)
    : hamburgerButton.removeEventListener('click', hideShow);
}


validations(mediaQuery);

function hideShow() {
  menu.classList.contains('is_active')
    ? menu.classList.remove('is_active')
    : menu.classList.add('is_active');
}
