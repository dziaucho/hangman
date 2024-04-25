export function saveUser(username: string): void {
  localStorage.setItem("username", username);
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
