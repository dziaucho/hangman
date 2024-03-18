import { BaseTag } from "../../elements/base/base";
import { levelDates } from "../../content/functions/level-dates-array";
import { mixedWrapper } from "./game-page";
import { formingWrapper } from "./game-page";
import { statPar } from "./game-page";

const wordsParMixed: BaseTag[] = [];
let wordsParCorrect: BaseTag[] = [];

function switchParent(word: BaseTag) {
  return function (): void {
    if (word.parentElement === mixedWrapper) {
      word.changeParent(formingWrapper);
      wordsParCorrect.push(word);
      const index = wordsParMixed.indexOf(word);
      wordsParMixed.splice(index, 1);
    } else {
      word.changeParent(mixedWrapper);
      wordsParMixed.push(word);
      const index = wordsParCorrect.indexOf(word);
      wordsParCorrect.splice(index, 1);
    }

    if (formingWrapper.elem.classList.contains("incorrect"))
      formingWrapper.removeClass("incorrect");
  };
}

function wordsParClick(): void {
  wordsParMixed.forEach((word) => {
    word.elem.addEventListener("click", switchParent(word));
  });
}

export function pushMixedWord(): void {
  for (let i = 0; i < levelDates.curMixedSentence.length; i += 1) {
    const word: BaseTag<HTMLParagraphElement> =
      new BaseTag<HTMLParagraphElement>("p", "word", mixedWrapper);
    word.elem.innerText = levelDates.curMixedSentence[i];
    wordsParMixed.push(word);
  }

  wordsParClick();
  statPar.elem.innerText = `collection: ${levelDates.objIndex}, round: ${levelDates.curRoundNum}, sentence: ${levelDates.curSentenceIndex}`;
}

function clearCorrect(): void {
  wordsParCorrect.forEach((word) => {
    word.removeParent();
  });
  wordsParCorrect = [];
}

function continueGame(): void {
  clearCorrect();
  levelDates.goNextSentence();
  pushMixedWord();
}

export function checkCorrect(): void {
  if (levelDates.curSentence) {
    for (let i = 0; i < wordsParCorrect.length; i += 1) {
      if (wordsParCorrect[i].elem.innerText !== levelDates.curSentence[i]) {
        formingWrapper.addClass("incorrect");
        return;
      }
    }
    continueGame();
  }
}
