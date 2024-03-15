export class BaseTag<T extends HTMLElement = HTMLElement> {
  parentElement: HTMLElement | BaseTag;

  elem: T;

  constructor(
    tagName: string,
    tagClass: string,
    parentElement: HTMLElement | BaseTag,
  ) {
    this.parentElement = parentElement;
    this.elem = document.createElement(tagName) as T;

    this.elem.className = tagClass;
    this.addElemToDoc(this.parentElement);
  }

  protected addElemToDoc(parentElement: HTMLElement | BaseTag): void {
    if (parentElement instanceof HTMLElement)
      parentElement.appendChild(this.elem);
    if (parentElement instanceof BaseTag)
      parentElement.elem.appendChild(this.elem);
  }

  public addClass(newClass: string): void {
    if (this.elem) this.elem.classList.add(newClass);
  }

  public removeClass(oldClass: string): void {
    if (this.elem) this.elem.classList.remove(oldClass);
  }
}
