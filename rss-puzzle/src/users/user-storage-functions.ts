import { nameInput, surnameInput } from "../pages/entry-page/entry-page";

function updateUsersLogged(newUserName: string, newUserSurname: string): void {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const storedUser = JSON.parse(localStorage.getItem(key) || "{}");
    if (
      storedUser.name !== newUserName ||
      storedUser.surname !== newUserSurname
    ) {
      storedUser.isLogged = false;
      localStorage.setItem(key, JSON.stringify(storedUser));
    }
  }
}

export function createUser(): void {
  const user = {
    isLogged: true,
    name: nameInput.elem.value,
    surname: surnameInput.elem.value,
  };
  localStorage.setItem(
    `${user.name}_${user.surname}`,
    JSON.stringify({ user }),
  );
  console.log(localStorage.getItem(`${user.name}_${user.surname}`));
  updateUsersLogged(user.name, user.surname);
}

export function removeUser(): void {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const storedUser = JSON.parse(localStorage.getItem(key) ?? "{}");
    if (storedUser.isLogged) localStorage.removeItem(key);
  }
}
