import { deleteButton } from "./start-page";
import { removeUser } from "../../users/user-storage-functions";
import { entrySection } from "../entry-page/entry-page";
import { startSection } from "./start-page";

function goEntry(): void {
  entrySection.removeClass('hide');
  startSection.addClass('hide');
}

function test(): void {
  alert();
}

deleteButton.elem.addEventListener('click', test);

/*
deleteButton.elem.addEventListener('click', goEntry);
deleteButton.elem.addEventListener('click', removeUser);