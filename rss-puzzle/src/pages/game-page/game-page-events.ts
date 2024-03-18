import { BaseTag } from "../../elements/base/base";
import { levelDates } from "../../content/functions/level-dates-array";
import { mixedWrapper } from "./game-page";
import { formingWrapper } from "./game-page";

const wordsParMixed: BaseTag[] = [];
const wordsParCorrect: BaseTag[] = [];

export function pushMixedWord(): void {
  for (let i = 0; i < levelDates.curMixedSentence.length; i += 1) {
    let word: BaseTag<HTMLParagraphElement> = new BaseTag<HTMLParagraphElement>("p", "word", mixedWrapper);
    word.elem.innerText = levelDates.curMixedSentence[i];
    wordsParMixed.push(word);
  }

  wordsParClick()
}

function wordsParClick(): void {
  wordsParMixed.forEach((word) => {
    word.elem.addEventListener('click', switchParent(word));
  })
}

function switchParent(word: BaseTag) {
  return function (): void {
    if (word.parentElement === mixedWrapper) {
      word.changeParent(formingWrapper);
      wordsParCorrect.push(word);
      const index = wordsParMixed.indexOf(word);
      wordsParMixed.slice(index, 1);
    } else {
      word.changeParent(mixedWrapper);
      wordsParMixed.push(word);
      const index = wordsParMixed.indexOf(word);
      wordsParCorrect.slice(index, 1);
    }
  };
}