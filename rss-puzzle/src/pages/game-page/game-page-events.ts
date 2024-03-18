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

  wordsParMixedClick()
}

function wordsParMixedClick(): void {
  wordsParMixed.forEach((word) => {
    word.elem.addEventListener('click', test(word));
  })
}

function test(word: BaseTag) {
  return function (): void {
    word.changeParent(formingWrapper);
  }
}