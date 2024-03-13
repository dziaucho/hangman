interface Base {
  tagName: string;
  tagClass: string;
  tagId?: string;
  tagSrc?: string;
  tagAlt?: string;

  addElemToDoc(parentElement: HTMLElement | BaseTag): void;
  addClass(newClass: string): void;
  removeClass(oldClass: string): void;
}

export class BaseTag<T extends HTMLElement = HTMLElement> implements Base {
  tagName: string;
  tagClass: string;
  tagId?: string;
  tagSrc?: string;
  tagAlt?: string;
  elem: T;

  constructor(tagName: string, tagClass: string, tagId?: string, tagSrc?: string, tagAlt?: string) {
    this.tagName = tagName;
    this.tagClass = tagClass;
    this.tagId = tagId;
    this.tagSrc = tagSrc;
    this.tagAlt = tagAlt;

    this.elem = document.createElement(this.tagName) as T;
    this.elem.className = this.tagClass;
    if (this.tagId) this.elem.id = this.tagId;
    if (this.tagSrc) this.elem.setAttribute('src', this.tagSrc);
    if (this.tagAlt) this.elem.setAttribute('alt', this.tagAlt);
  }

  addElemToDoc(parentElement: HTMLElement | BaseTag): void {
    if (parentElement instanceof HTMLElement) parentElement.appendChild(this.elem);
    if (parentElement instanceof BaseTag) parentElement.elem.appendChild(this.elem);
  }

  addClass(newClass: string): void {
    if (this.elem) this.elem.classList.add(newClass);
  }

  removeClass(oldClass: string): void {
    if (this.elem) this.elem.classList.remove(oldClass);
  }
}