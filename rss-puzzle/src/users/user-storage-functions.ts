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

function isUserExsist(userName: string, userSurname: string): boolean {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const storedUser = JSON.parse(localStorage.getItem(key) || "{}");
    if (storedUser.name === userName && storedUser.surname === userSurname) {
      return true;
    }
  }
  return false;
}

export function createUser(): void {
  const userName = nameInput.elem.value;
  const userSurname = surnameInput.elem.value;

  if (!isUserExsist(userName, userSurname)) {
    const user = {
      isLogged: true,
      name: userName,
      surname: userSurname,
    };
    localStorage.setItem(
      `${user.name}_${user.surname}`,
      JSON.stringify({ user }),
    );
  }
  updateUsersLogged(nameInput.elem.value, surnameInput.elem.value);
}

export function removeUser(): void {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const storedUser = JSON.parse(localStorage.getItem(key) || "{}");
    if (storedUser.user && storedUser.user.isLogged) {
      localStorage.removeItem(key);
    }
  }
}


export function getLastUser(): string | null {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const storedUser = JSON.parse(localStorage.getItem(key) || "{}");
    if (storedUser.user && storedUser.user.isLogged) {
      return `${storedUser.user.name} ${storedUser.user.surname}`;
    }
  }
  return null;
}