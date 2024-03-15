import { goEntry } from "./start-page/start-page-event";
import { goStart } from "./entry-page/entry-page-events";

function loadEvent(): void {
  if (localStorage.length > 0) {
    goStart();
  } else {
    goEntry();
  }
}

window.addEventListener("load", loadEvent);
