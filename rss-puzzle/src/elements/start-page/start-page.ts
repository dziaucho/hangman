import { BaseTag } from "../base/base";
import "../../styles/start-page/style.css";

export const startSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>('section', 'start-section');
export const deleteButton: BaseTag<HTMLButtonElement> = new BaseTag<HTMLButtonElement>('button', 'delete-button');

startSection.addElemToDoc(document.body);
deleteButton.addElemToDoc(startSection);

startSection.addClass('hide');
deleteButton.elem.innerText = 'delete user';

console.log(deleteButton);