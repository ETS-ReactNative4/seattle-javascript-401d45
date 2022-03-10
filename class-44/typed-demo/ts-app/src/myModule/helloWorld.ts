// immutables in TS
let person: string = 'Jacob';
let age: number = 32;
let isProgrammer: boolean = true;

let test: any = 'test'; // avoid this
test = 12;

export function helloWorld(text: string): string {
  return `Hello ${text}`;
}
