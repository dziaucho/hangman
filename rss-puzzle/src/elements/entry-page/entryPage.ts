const bodyElement: HTMLElement = document.body;

import { BaseTag } from "../base/base";

const entrySection: BaseTag = new BaseTag('section', 'entry-section');
const welcomeHeading: BaseTag<HTMLHeadingElement> = new BaseTag<HTMLHeadingElement>('h1', 'welcome-heading');
const inputsWrapper: BaseTag = new BaseTag('div', 'inputs-wrapper-div');
const nameInput: BaseTag<HTMLInputElement> = new BaseTag('input', 'name-input');
const surnameInput: BaseTag<HTMLInputElement> = new BaseTag('input', 'surname-input');
const loginButton: BaseTag<HTMLInputElement> = new BaseTag('input', 'login-button-input');

welcomeHeading.elem.innerText = 'welcome';
nameInput.elem.type = 'text';
surnameInput.elem.type = 'text';
loginButton.elem.type = 'submit';
nameInput.elem.placeholder = 'your name';
surnameInput.elem.placeholder = 'your surname';
loginButton.elem.value = 'login';

entrySection.addElemToDoc(bodyElement);
welcomeHeading.addElemToDoc(entrySection);
inputsWrapper.addElemToDoc(entrySection);
nameInput.addElemToDoc(inputsWrapper);
surnameInput.addElemToDoc(inputsWrapper);
loginButton.addElemToDoc(entrySection);