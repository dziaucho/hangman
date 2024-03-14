import { nameInput, surnameInput } from "../elements/entry-page/entryPage";

/*

interface User {
 name: string;
 surname: string;
}

export class Users {
 users: User[];

 constructor() {
   this.users = [];
 }

 addUser(): void {
   const name = nameInput.elem.value;
   const surname = surnameInput.elem.value;
   localStorage.setItem('name', name);
   localStorage.setItem('surname', surname);
   this.users.push({ name, surname });
 }
} */

export function createUser(): void {
  const name = nameInput.elem.value;
  const surname = surnameInput.elem.value;
  localStorage.setItem(`${name}_name`, name);
  localStorage.setItem(`${surname}_surname`, surname);
}

export function showUser(): void {
  const name = nameInput.elem.value;
  const surname = surnameInput.elem.value;
  console.log('name', localStorage.getItem(`${name}_name`));
  console.log('surname', localStorage.getItem(`${surname}_surname`))
}
