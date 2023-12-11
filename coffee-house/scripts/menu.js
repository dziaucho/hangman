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

// cards menu

let offerSectionCards = document.querySelectorAll('.offer-section-cards');
let offerListItems = document.querySelectorAll('.offer-list-item');
let offerMoreButton = document.querySelector('.offer-section-more-button');
let amountElements;
let currentElements;
let currentMenu;
let screenWidth;
let currentPage;

for (let i = 0; i < offerListItems.length; i++) {
  offerListItems[i].addEventListener('click', changeMenu(i));
}

offerMoreButton.addEventListener('click', loadMoreCards);

function loadMoreCards() {
  offerMoreButton.style.display = "none";
  currentMenu = document.querySelector('.current');
  currentElements = currentMenu.querySelectorAll('.offer-card-list');
  if (currentElements.length > 4) {
    for (let i = 5; i < currentElements.length; i++) {
      currentElements[i].style.display = "block";
    }
  }
}

function changeMenu(i) {
  return function () {
    screenWidth = window.screen.width;
    for (let j = 0; j < offerListItems.length; j++) {
      if (offerListItems[j].classList.contains('active')) {
        offerListItems[j].classList.remove('active');
        offerListItems[j].classList.add('unactive')
      };
    }

    for (let o = 0; o < offerSectionCards.length; o++) {
      offerSectionCards[o].classList.add('hide');
      offerSectionCards[o].classList.remove('current');
    }

    offerSectionCards[i].classList.remove('hide');
    offerSectionCards[i].classList.add('current');
    amountElements = offerSectionCards[i].querySelectorAll('.offer-card-list')

    if (amountElements.length <= 4 || screenWidth >= 1090) {
      offerMoreButton.style.display = "none";
    } else {
      offerMoreButton.style.display = "flex";
    }

    offerListItems[i].classList.remove('unactive');
    offerListItems[i].classList.add('active');

    currentMenu = document.querySelector('.current');
    currentElements = currentMenu.querySelectorAll('.offer-card-list');
    if (currentElements.length > 4 && screenWidth < 1090) {
      for (let i = 4; i < currentElements.length; i++) {
        currentElements[i].style.display = "none";
      }
    }
    isNeedMoreButton();
  }
}

function isNeedMoreButton() {
  screenWidth = window.screen.width;
  amountElements = document.querySelectorAll('.current .offer-card-list');
  if (amountElements.length <= 4 || screenWidth >= 1090) {
    offerMoreButton.style.display = "none";
    for (let i = 0; i < amountElements.length; i++) {
      amountElements[i].style.display = "flex";
    }
  } else {
    offerMoreButton.style.display = "flex";
    for (let i = 4; i < amountElements.length; i++) {
      amountElements[i].style.display = "none";
    }
  }
}

window.addEventListener('resize', isNeedMoreButton);
