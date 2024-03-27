import BaseTag from "./base";

class InputTag<
  T extends HTMLInputElement = HTMLInputElement,
> extends BaseTag<T> {
  constructor(
    tagName: string,
    tagClass: string,
    parentElement: HTMLElement | BaseTag,
    typeInput: string,
    placeholder?: string,
    value?: string,
  ) {
    super(tagName, tagClass, parentElement);
    this.elem.type = typeInput;
    if (placeholder) this.elem.placeholder = placeholder;
    if (value) this.elem.value = value;
  }
}
