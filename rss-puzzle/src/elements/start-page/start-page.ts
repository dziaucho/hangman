import { BaseTag } from "../base/base";
import "../../styles/start-page/style.css";
import { test } from "./start-page-event";
export const startSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>('section', 'start-section');
export const deleteButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>('button', 'delete-button');

startSection.addElemToDoc(document.body);
deleteButton.addElemToDoc(startSection);

startSection.addClass('hide');
deleteButton.elem.innerText = 'delete user';

deleteButton.elem.addEventListener('click', test)