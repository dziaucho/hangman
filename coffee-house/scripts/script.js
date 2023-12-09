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
let intervalTimeAnimation;
let ongoingControl = document.querySelector('.ongoing');

let checkWidthInterval;

let xTouch = 0;
let xMove = 0;
let direction = 0;

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
  clearInterval(intervalTimeAnimation);
  removeOngoingControl();
  controlItmes[counter].classList.add('ongoing');
  intervalTimeAnimation = setInterval(moveRightWithCounter, 5000);
  carouselLine.style.transform = 'translate(-' + counter * widthCarousel + 'px)';
}

function moveRight() {
  carouselLine.style.transform = 'translate(-' + counter * widthCarousel + 'px)';
}

function moveLeft() {
  console.log('in')
  counter--;
  if (counter < 0) {
    counter = coffeeCards.length - 1;
  };
  clearInterval(intervalTimeAnimation);
  removeOngoingControl();
  controlItmes[counter].classList.add('ongoing');
  intervalTimeAnimation = setInterval(moveRightWithCounter, 5000);
  carouselLine.style.transform = 'translate(-' + counter * widthCarousel + 'px)';
}

function removeOngoingControl() {
  for (let i = 0; i < controlItmes.length; i++) {
    if (controlItmes[i].classList.contains('ongoing')) {
      controlItmes[i].classList.remove('ongoing')
    }
  }
}

function touchOnCarousel() {
  ongoingControl = document.querySelector('.ongoing');
  ongoingControl.style.animationPlayState = 'paused';
  clearInterval(intervalTimeAnimation);
}

function touchOnCarouselEnd() {
  ongoingControl = document.querySelector('.ongoing');
  ongoingControl.style.animationPlayState = 'running';
  checkWidthInterval = setInterval(isOngoingEnd, 50)
}

function isOngoingEnd() {
  if (ongoingControl.offsetWidth == 40) {
    moveRightWithCounter();
    clearInterval(checkWidthInterval);
  }
}
/*
function swipeTouchStart(event) {
  xTouch = event.touches[0].clientX;
}


function swipeTouchMove(event) {
  clearInterval(intervalTimeAnimation);
  xMove = event.touches[0].clientX;
  console.log('tiuch', xTouch, ' move', xMove)
  direction = xMove - xTouch;
  console.log(direction);

  if (direction > 150) {
    moveLeft();
    direction = 0;
    return
  } else if (direction < -100) {
    direction = 0;
    return
  }
}

  for (let i = 0; i < coffeeCards.length; i++) {
    coffeeCards[i].addEventListener('touchstart', swipeTouchStart);
    coffeeCards[i].addEventListener('touchmove', swipeTouchMove);
  }
*/

window.addEventListener('resize', resizeCarousel);

nextButton.addEventListener('click', moveRightWithCounter);
preveousButton.addEventListener('click', moveLeft);

for (let i = 0; i < coffeeCards.length; i++) {
  coffeeCards[i].addEventListener('touchstart', touchOnCarousel);
  coffeeCards[i].addEventListener('touchend', touchOnCarouselEnd);
}

resizeCarousel();
intervalTimeAnimation = setInterval(moveRightWithCounter, 5000);