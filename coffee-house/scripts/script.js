// burger-menu

let body = document.querySelector('body');
let header = document.querySelector('header');
let burgerToggle = document.querySelector('.burger-toggle');
let burgerMenu = document.querySelector('.burger-menu-links');
let burgerLinks = burgerMenu.querySelectorAll('a');

function openBurgerMenu() {
  if (burgerToggle.classList.contains('unactive')) {
    burgerToggle.classList.remove('unactive');
    burgerMenu.classList.remove('unactive');
    header.style.overflowX = 'visible';
    body.style.overflow = 'hidden';
  } else {
    burgerToggle.classList.add('unactive');
    burgerMenu.classList.add('unactive');
    header.style.overflowX = 'hidden';
    body.style.overflow = 'visible';
  };
};

for (let i = 0; i < burgerLinks.length; i++) {
  burgerLinks[i].addEventListener('click', openBurgerMenu);
};

burgerToggle.addEventListener('click', openBurgerMenu);

// carousel

let carousel = document.querySelector('.carousel');
let carouselLine = document.querySelector('.carousel-line');
let coffeeCards = document.querySelectorAll('.coffee-card');
let preveousButton = document.querySelector('.preveous');
let nextButton = document.querySelector('.next');
let controlItmes = document.querySelectorAll('.active');

let counter = 0;
let widthCarousel;

function resizeCarousel() {
  widthCarousel = carousel.offsetWidth;
  carousel.style.width = widthCarousel * coffeeCards.length + 'px';
  for (let i = 0; i < coffeeCards.length; i++) {
    coffeeCards[i].style.width = widthCarousel + 'px';
    coffeeCards[i].style.heigth = 'auto';
  }
  moveRight();
}

function moveRightWithCounter() {
  counter++;
  if (counter >= coffeeCards.length) {
    counter = 0
  };
  removeOngoingControl();
  controlItmes[counter].classList.add('ongoing');
  carouselLine.style.transform = 'translate(-' + counter * widthCarousel + 'px)';
}

function moveRight() {
  carouselLine.style.transform = 'translate(-' + counter * widthCarousel + 'px)';
}

function moveLeft() {
  counter--;
  if (counter < 0) {
    counter = coffeeCards.length - 1;
  };
  carouselLine.style.transform = 'translate(-' + counter * widthCarousel + 'px)';
}

function removeOngoingControl() {
  for (let i = 0; i < controlItmes.length; i++) {
    if (controlItmes[i].classList.contains('ongoing')) {
      controlItmes[i].classList.remove('ongoing')
    }
  }
}

window.addEventListener('resize', resizeCarousel);
resizeCarousel();

nextButton.addEventListener('click', moveRightWithCounter);
preveousButton.addEventListener('click', moveLeft);

setInterval(moveRightWithCounter, 5000);
