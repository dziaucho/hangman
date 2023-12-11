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


// modal

import products from "./products.json" assert { type: "json" };
console.log(products[0]["sizes"])


let overlayModal = document.querySelector('.overlay')
let cardsItem = document.querySelectorAll('.offer-card-list');
let buttinClose = overlayModal.querySelector('button');
let modalWrapper = document.querySelector('.modal-wrapper');

let cardItemName = modalWrapper.querySelector('h2');
let modalPhoto = modalWrapper.querySelector('.modal-photo');
let discription = modalWrapper.querySelector('.modal-wrapper-item-name p');
let sizesOfItemsName = modalWrapper.querySelectorAll('.size-list span');
let sizesOfItemsValue = modalWrapper.querySelectorAll('.size-list h4');
let additivesOfItemNumber = modalWrapper.querySelectorAll('.additives-list span');
let additivesOfItemName = modalWrapper.querySelectorAll('.additives-list h4');
let totalPrise = modalWrapper.querySelector('.total-wrapper p');
let sizeButtons = modalWrapper.querySelectorAll('.size-list-item');
let additivesButtons = modalWrapper.querySelectorAll('.additives-list-item');

function showModal(item) {
  return function () {

    resetSizes();
    resetAdditives();
    let keysOfSizes = [];
    for (let key in products[item]["sizes"]) {
      keysOfSizes.push(key)
    }

    let keysOfAdditives = [];
    for (let key in products[item]["additives"]) {
      keysOfAdditives.push(key)
    }

    modalPhoto.style.background = products[item]["img"];
    cardItemName.innerHTML = products[item]["name"];
    discription.innerHTML = products[item]["description"];

    for (let j = 0; j < sizesOfItemsName.length; j++) {
      sizesOfItemsName[j].innerHTML = keysOfSizes[j];
      sizesOfItemsName[j].style.textTransform = "uppercase";
    }

    for (let j = 0; j < sizesOfItemsValue.length; j++) {
      sizesOfItemsValue[j].innerHTML = products[item]["sizes"][keysOfSizes[j]]["size"];
    }

    for (let j = 0; j < additivesOfItemNumber.length; j++) {
      additivesOfItemName[j].innerHTML = products[item]["additives"][keysOfAdditives[j]]["name"];
    }

    for (let o = 0; o < sizeButtons.length; o++) {
      sizeButtons[o].addEventListener('click', changeSizeAddPrice(item))
    }

    for (let o = 0; o < additivesButtons.length; o++) {
      additivesButtons[o].addEventListener('click', changeAdditiveAddPrice(item))
    }

    totalPrise.innerHTML = '$' + parseFloat(products[item]["price"]).toFixed(2);

    overlayModal.classList.remove('hidden');
  }
}

var additionalPriceVariableSize = 0;
var additionalPriceVariableAdd = 0;

function changeSizeAddPrice(item) {
  return function () {
    let standardPrice = Number(products[item]["price"]);
    let whatIsSize = modalWrapper.querySelector('.size-list-item.active span').innerHTML;
    additionalPriceVariableSize = Number(products[item]["sizes"][whatIsSize]["add-price"]);
    let result = additionalPriceVariableSize + standardPrice + additionalPriceVariableAdd;
    totalPrise.innerHTML = '$' + parseFloat(result).toFixed(2);
    console.log(additionalPriceVariableSize);
  }
}

function changeAdditiveAddPrice(item) {
  return function () {
    let keysOfAdditives = [];
    let keysOfAdditivesValue = [];
    let standardPrice = Number(products[item]["price"]);

    for (let k = 0; k < products[item]["additives"].length; k++) {
      keysOfAdditives.push(products[item]["additives"][k]["name"]);
      keysOfAdditivesValue.push(products[item]["additives"][k]["add-price"])
    }

    let activeAdditive = [];
    let headingAdds = [];
    for (let o = 0; o < additivesButtons.length; o++) {
      if (additivesButtons[o].classList.contains('active')) {
        let headingAdd = additivesButtons[o].querySelector('h4').innerHTML;
        activeAdditive.push(additivesButtons[o])
        headingAdds.push(headingAdd);
      }
    }
    // як перабраць гэта ааааааааааааа 00:20 я памерла

    additionalPriceVariableAdd = headingAdds.length * 0.5;
    console.log(additionalPriceVariableAdd);

    let result = additionalPriceVariableSize + standardPrice + additionalPriceVariableAdd;
    totalPrise.innerHTML = '$' + parseFloat(result).toFixed(2);
  }
}

function hideModal() {
  overlayModal.classList.add('hidden');
}

function changeSize(item) {
  return function () {
    for (let j = 0; j < sizeButtons.length; j++) {
      if (sizeButtons[j].classList.contains('active')) {
        sizeButtons[j].classList.remove('active');
        sizeButtons[j].classList.add('unactive');
      }
      sizeButtons[item].classList.add('active');
    }
  }
}

function changeAdditive(item) {
  return function () {
    if (additivesButtons[item].classList.contains('active')) {
      additivesButtons[item].classList.remove('active');
      additivesButtons[item].classList.add('unactive');
    } else {
      additivesButtons[item].classList.remove('unactive');
      additivesButtons[item].classList.add('active');
    }
  }
}

function resetAdditives() {
  for (let i = 0; i < additivesButtons.length; i++) {
    additivesButtons[i].classList.remove('active');
    additivesButtons[i].classList.add('unactive');
  }
  additionalPriceVariableAdd = 0;
}


function resetSizes() {
  for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].classList.remove('active');
  }
  sizeButtons[0].classList.add('active');
  additionalPriceVariableSize = 0;
}

for (let i = 0; i < cardsItem.length; i++) {
  cardsItem[i].addEventListener('click', showModal(i))
}

for (let i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener('click', changeSize(i));
}

for (let i = 0; i < additivesButtons.length; i++) {
  additivesButtons[i].addEventListener('click', changeAdditive(i))
}

buttinClose.addEventListener('click', hideModal);