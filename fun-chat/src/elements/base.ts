interface ElementWithType extends HTMLElement {
  type?: string;
}

export default class BaseTag<T extends ElementWithType = HTMLElement> {
  elem: T;

  parentElement: HTMLElement | BaseTag;

  constructor(
    tagName: string,
    tagClass: string,
    parentElement: HTMLElement | BaseTag,
    typeElement?: string,
  ) {
    this.elem = document.createElement(tagName) as T;
    this.parentElement = parentElement;
    this.elem.className = tagClass;
    this.addElemToDoc(this.parentElement);
    if (typeElement) this.elem.type = typeElement;
  }

  protected addElemToDoc(parentElement: HTMLElement | BaseTag): void {
    if (parentElement instanceof HTMLElement)
      parentElement.appendChild(this.elem);
    if (parentElement instanceof BaseTag)
      parentElement.elem.appendChild(this.elem);
  }

  public changeParent(newParent: HTMLElement | BaseTag): void {
    const parentElem =
      this.parentElement instanceof BaseTag
        ? this.parentElement.elem
        : this.parentElement;
    parentElem.removeChild(this.elem);

    this.parentElement = newParent;
    this.addElemToDoc(this.parentElement);
  }

  public removeParent(): void {
    const parentElem =
      this.parentElement instanceof BaseTag
        ? this.parentElement.elem
        : this.parentElement;
    parentElem.removeChild(this.elem);
  }
}
