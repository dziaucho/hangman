// burger-menu

let body = document.querySelector('body');
let burgerToggle = body.querySelector('.burger-toggle');
let burgerMenu = body.querySelector('.burger-menu-links');
let burgerLinks = burgerMenu.querySelectorAll('a');

function openBurgerMenu() {
  if (burgerToggle.classList.contains('unactive')) {
    burgerToggle.classList.remove('unactive');
    burgerMenu.classList.remove('unactive');
    body.style.overflowX = 'hidden';
  } else {
    burgerToggle.classList.add('unactive');
    burgerMenu.classList.add('unactive');
    body.style.overflowX = visible;
  }
}

for (let i = 0; i < burgerLinks.length; i++) {
  burgerLinks[i].addEventListener('click', openBurgerMenu)
}

burgerToggle.addEventListener('click', openBurgerMenu);