import BaseTag from "./base";

export default class InputTag<
  T extends HTMLInputElement = HTMLInputElement,
> extends BaseTag<T> {
  constructor(
    tagClass: string,
    parentElement: HTMLElement | BaseTag,
    typeInput: string,
    nameInput: string,
    isRequired: boolean,
    pattern?: string,
    placeholder?: string,
    value?: string,
  ) {
    super("input", tagClass, parentElement);
    this.elem.type = typeInput;
    this.elem.name = nameInput;
    if (isRequired) this.elem.setAttribute("required", "");
    if (pattern) this.elem.pattern = pattern;
    if (placeholder) this.elem.placeholder = placeholder;
    if (value) this.elem.value = value;
  }
}
