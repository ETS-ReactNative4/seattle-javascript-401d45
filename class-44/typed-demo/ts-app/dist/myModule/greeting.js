"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetFromArray = exports.greet = void 0;
function greet(user) {
    return `Greetings ${user.name}`;
}
exports.greet = greet;
function greetFromArray(users) {
    for (let user of users) {
        console.log(`Hello ${user.name}`);
    }
}
exports.greetFromArray = greetFromArray;
//# sourceMappingURL=greeting.js.map