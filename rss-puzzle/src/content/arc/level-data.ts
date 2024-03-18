import { WordCollection, Word } from "./word-collection";

export class LevelData {
  levelsObj: WordCollection[];

  objIndex: number;

  obj: WordCollection;

  roundsAmount: number;

  curRoundNum: number;

  curRoundObj: Word[];

  linesAmount: number;

  roundsSentences: string[][];

  curSentenceIndex: number;

  curSentence: string[];

  curMixedSentence: string[];

  constructor(datasInput: WordCollection[]) {
    this.levelsObj = datasInput;
    this.objIndex = this.levelsObj.length - this.levelsObj.length;
    this.obj = this.levelsObj[this.objIndex];
    this.roundsAmount = this.obj.rounds.length;
    this.curRoundNum = this.obj.rounds.length - this.obj.rounds.length;
    this.curRoundObj = this.obj.rounds[this.curRoundNum].words;
    this.linesAmount = this.curRoundObj.length;
    this.roundsSentences = this.getSentences();
    this.curSentenceIndex = this.linesAmount - this.linesAmount;
    this.curSentence = this.roundsSentences[this.curSentenceIndex];
    this.curMixedSentence = this.mixWords(this.curSentence);
  }

  private getSentences(): string[][] {
    const sentences: string[][] = [];

    for (const word of this.curRoundObj) {
      if (word.textExample) {
        const wordsInSentence = word.textExample.toLowerCase().split(" ");
        sentences.push(wordsInSentence);
      }
    }

    return sentences;
  }

  private mixWords(unmixWords: string[]): string[] {
    const mixedWords: string[] = unmixWords.slice();

    function getRandomIndex(max: number): number {
      return Math.floor(Math.random() * max);
    }

    for (let i = mixedWords.length - 1; i > 0; i -= 1) {
      const j = getRandomIndex(i + 1);
      [mixedWords[i], mixedWords[j]] = [mixedWords[j], mixedWords[i]];
    }

    return mixedWords;
  }

  public goNextRoundData(): void {
    if (this.curRoundNum < this.roundsAmount) {
      this.curRoundNum += 1;
      this.curRoundObj = this.obj.rounds[this.curRoundNum].words;
      this.linesAmount = this.curRoundObj.length;
      this.roundsSentences = this.getSentences();
    }
  }

  public goNextSentence(): void {
    if (this.curSentenceIndex < this.linesAmount) {
      this.curSentenceIndex += 1;
      this.curSentence = this.roundsSentences[this.curSentenceIndex];
      this.curMixedSentence = this.mixWords(this.curSentence);
    }
  }

  public goNextLevel(): void {
    if (this.objIndex < this.levelsObj.length) {
      this.objIndex += 1;
    }
  }
}
