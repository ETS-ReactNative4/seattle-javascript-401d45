export interface User {
  name: string,
}

export function greet(user: User): string {
  return `Greetings ${user.name}`;
}

export function greetFromArray(users: Array<User>): void {
  for (let user of users) {
    console.log(`Hello ${user.name}`);
  }
}
