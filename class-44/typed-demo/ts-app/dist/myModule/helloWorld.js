"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
// immutables in TS
let person = 'Jacob';
let age = 32;
let isProgrammer = true;
let test = 'test'; // avoid this
test = 12;
function helloWorld(text) {
    return `Hello ${text}`;
}
exports.helloWorld = helloWorld;
//# sourceMappingURL=helloWorld.js.map