let menu = document.querySelector('.main-nav__list');
let menuItems = document.querySelector('.site-list__link');
let burgerBtn = document.querySelector('.main-nav__toggle');
let burgerClose = document.querySelector('.main-nav__toggle-close');
let burgerOpen = document.querySelector('.main-nav__toggle-open');

function toggleMenu() {
  if (menu.classList.contains ('showMenu')) {
    menu.classList.remove('showMenu');
    burgerClose.style.display = 'none';
    burgerOpen.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    burgerClose.style.display = 'block';
    burgerOpen.style.display = 'none';
  }
};

burgerBtn.addEventListener('click', toggleMenu);

menuItems.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
);
