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
let ongoingControl;

let checkTimeout = 0;
let checkInterval;
let counterTime = 0;
let paused = 0;

function resizeCarousel() {
  widthCarousel = carousel.offsetWidth;
  carousel.style.width = widthCarousel * coffeeCards.length + 'px';
  for (let i = 0; i < coffeeCards.length; i++) {
    coffeeCards[i].style.width = widthCarousel + 'px';
    coffeeCards[i].style.heigth = 'auto';
  }
  moveRight();
}

function Test() {
  checkTimeout++;
  if (checkTimeout > 5) {
    checkTimeout = 1;
  }
  console.log('regular', checkTimeout)
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
  checkInterval = setInterval(checkTouchInterval, 1000);
}

function touchOnCarouselEnd() {
  ongoingControl = document.querySelector('.ongoing');
  ongoingControl.style.animationPlayState = 'running';
  paused = (5 - Math.abs(counterTime - checkTimeout));
  console.log('result', paused)
  setTimeout(moveRightWithCounter, paused)
}

function checkTouchInterval() {
  counterTime += 1;
  if (counterTime > 5) {
    counterTime = 1;
  }
  console.log(counterTime)
}

window.addEventListener('resize', resizeCarousel);

nextButton.addEventListener('click', moveRightWithCounter);
preveousButton.addEventListener('click', moveLeft);

for (let i = 0; i < coffeeCards.length; i++) {
  coffeeCards[i].addEventListener('touchstart', touchOnCarousel);
  coffeeCards[i].addEventListener('touchend', touchOnCarouselEnd);
}

resizeCarousel();
intervalTimeAnimation = setInterval(moveRightWithCounter, 5000);

setInterval(Test, 1000)
