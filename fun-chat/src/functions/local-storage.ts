export function saveUser(username: string, password: string): void {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

export function removeUser(): void {
  localStorage.clear();
}

export function isLogged(): boolean {
  return localStorage.length > 0;
}

export function getUserName(): string | null {
  return localStorage.getItem("username");
}

export function getUserPassword(): string | null {
  return localStorage.getItem("password");
}
