"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberValue = exports.stringValue = void 0;
function sayHello(name) {
    console.log("Hello, ".concat(name));
}
// 파일당 2개 이상 export 할 수 있다.
exports.stringValue = 'Test Value';
exports.numberValue = 10;
// 파일당 default는 하나만
exports.default = sayHello;
