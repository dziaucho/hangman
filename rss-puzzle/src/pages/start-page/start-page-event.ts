import { entrySection } from "../entry-page/entry-page";
import { startSection } from "./start-page";

function goEntry(): void {
  entrySection.removeClass("hide");
  startSection.addClass("hide");
}

export function test(): void {
  goEntry();
}
