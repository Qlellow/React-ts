/* const userName = 'TS User';
console.log(`Hello ${userName}`);

let str: string = '';
let num = 1;

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
const plus = (num1: number, num2: number): number => num1 + num2;

// const value = add(num, num * 10);

let str1: string = 'Hello';
let str2: string = str1; // OK
let str3: String = str1; // OK
// let str4: string = str3; // Error. 원시 타입에 객체를 대입할 수 없음

let n1: number = 1;
let n2: number = 2;
let n3: Number = 3;
let n4: Number = 4;

n1 + n2; // OK
// n1 + n3; // number + Number -> ERROR
// n1 + n4; // Number + Number -> ERROR

const names = ['Alice', 'Bob', 'Eve'];

// 상황에 따른 타입 지정. 이 상황에서 s 는 string입을 추론할 수 있음
names.forEach(s => {
  console.log(s.toUpperCase());
});
// 추론이 가능할 경우 타입 명시를 생략할 수 있음
// 추론이 불가능한 경우 반드시 타입 명시

const value1: number = 1;
const value2: number = value1 + 1;
const value3: string = 'Hello';

const add = (arg1: number, arg2: number): number => {
  return arg2 + arg1;
};

const result: number = add(1, 2);
const check: boolean = result > 3;
console.log(result);
console.log(check);

const arr1: number[] = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3: string[] = ['a', 'b', 'c'];
const arr4 = ['a', 'b', 'c'];
const arr5: Array<number> = [1, 2, 3];
// number[]와 [number]는 다른 뜻
// [number]는 튜플로 다른 특성을 가지므로 주의

// 타입을 명시하지 않은 빈 배열은 any[]가 되므로 주의
// const arr6 = [];

const array: string[] = ['Hello', 'World', 'Good', 'Days'];
const array2: number[] = array.map((i: string): number => {
  return i.length;
});

// let arr: number[] = [];
//
// for (let i = 1; i < 10; i++) {
//   arr.push(i * 2);
// }
// console.log(arr);

const tp1: [number, string, string, boolean] = [1, 'user', 'u@mail.com', false];
console.log(typeof tp1[2]); // string

const tp2: [number] = [1]; // 튜플. 숫자 타입 아이템 하나만 가지도록 선언.
tp2.push(2); // Push는 되지만

console.log(tp2);
// console.log(tp2[1]); // ERROR - 값을 부를 수 없다.

console.log(typeof tp2[0]); // OK
// 위 선언부에서 아이템을 하나만 지정했기 때문에 index를 통한 Access는 가능하다.

// 튜플 실습
const makeTuple = (num1: number, num2: number): [number, number] => {
  if (num1 > num2) return [num2, num1];
  else return [num1, num2];
};

const result2 = makeTuple(3, 2);
console.log(result2); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Union 실습
var getLength = function (i) {
    return i.length;
};
console.log(getLength('Hello')); // 5
var arr = ['Hello', 'World'];
console.log(getLength(arr)); // 2
// 리터럴 타입
// function moveTo(direction: 'left' | 'right' | 'up' | 'down') {
//   console.log(`move to ${direction}`);
// }
// moveTo('left'); // OK
// // moveTo('rihgt'); // ERROR
function setGrade(grade) {
    console.log("Set grade ".concat(grade));
}
setGrade(1); // OK
// setGrade(5); // ERROR
// 실습
var setUserType = function (id, type) {
    console.log("Set the type of [".concat(id, "] as ").concat(type));
};
setUserType(1, 'user');
setUserType(2, 'admin');
// 객체 타입
function test(arg) {
    console.log(arg.id, arg.name);
}
var user1 = { id: 1, name: 'user1' };
test(user1);
test({ id: 1, name: 'user2' });
function verifyPassword(password) {
    return password.length > 7;
}
function printId(id) {
    console.log("ID: ".concat(id));
}
// 타입 별칭
// type Point = {
//   x: number;
//   y: number;
// };
function print1(point) {
    console.log("".concat(point.x, ", ").concat(point.y));
}
// 둘이 같음
function print2(point) {
    console.log("".concat(point.x, ", ").concat(point.y));
}
function print3(point) {
    console.log("".concat(point.x, ", ").concat(point.y));
}
var t = { id: 1, value: 'TYPE' };
var i = { id: 2, value: 'INTERFACE' };
function testType(arg) {
    console.log("FUNC TYPE ".concat(arg.id, "-").concat(arg.value));
}
function testInterface(arg) {
    console.log("FUNC INTERFACE ".concat(arg.id, "-").concat(arg.value));
}
testType(t); // OK
testType(i); // OK. 내부 구조가 같으므로 통과
testInterface(t); // OK. 내부 구조가 같으므로 통과
testInterface(i); // OK
var okButton = {
    id: 1,
    text: 'OK',
    // { } 없이 화살표 함수를 추가할 때는 마지막에 ;대신 ,를 대신 사용
    onClick: function () { return console.log('clicked'); },
    onDraw: function () {
        console.log("Draw ".concat(this.text, " button"));
    },
};
okButton.onClick();
okButton.onDraw();
// 선택적 속성
// 속성 이름 뒤, ?를 추가
function test1(arg) {
    console.log(arg.id, arg.name);
}
test1(user1);
test1({ id: 2 }); // OK. 'name' is optional
// function paint(options: PaintOptions) {
//   // Optional property는 별도의 처리 필요
//   const width = options.width == undefined ? 1 : options.width;
//   const line = options.line == undefined ? 'solid' : options.line;
// }
// 방법 2
// Destructuring + default value
function paint(_a) {
    var color = _a.color, _b = _a.width, width = _b === void 0 ? 1 : _b, _c = _a.line, line = _c === void 0 ? 'solid' : _c;
    // 별도의 처리 없이 코딩 가능
    console.log(color, width, line);
}
paint({ color: 'red' });
// 읽기 전용 속성
// 객체는 참조 => 원본이 변경될 수 있음
function test2(obj) {
    // obj.id = 1; // ERROR
    console.log(obj.id);
}
var obj = { id: 1, value: 'hello' };
test2(obj);
function draw(paint) {
    console.log(paint.color, paint.line);
}
// draw({colour:'red', line: 'solid'}); // ERROR. 과잉 속성
// TS는 선언되지 않은 속성은 에러를 발생시킴
//제네릭 객체 타입(Generic Object Type)
function middle(arg) {
    var index = Math.floor(arg.length / 2);
    return arg[index];
}
var numArr = [1, 2, 3];
var result = middle(numArr); // result는 number 타입이 됨
var boolArr = [true, true, false];
var result2 = middle(boolArr); // result2는 boolean 타입이 됨
console.log(result);
console.log(result2);
// 클래스
var Point = /** @class */ (function () {
    function class_1(x, y) {
        this.x = x;
        this.y = y;
    }
    return class_1;
}());
// class Point {
//   x;
//   y;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// 멤버 속성
var A = /** @class */ (function () {
    function A(name, age) {
        this.name = name;
        this.age = age;
    }
    return A;
}());
// 축약 표기법
var B = /** @class */ (function () {
    function B(name, age) {
        this.name = name;
        this.age = age;
    }
    return B;
}());
var a = new A('a', 10);
var b = new B('b', 20);
// 멤버 함수
// prettier-ignore
var Button2 = /** @class */ (function () {
    function Button2() {
        this.drawOutline = function () { console.log('line'); };
        this.drawText = function () { console.log('text'); };
    }
    Button2.prototype.drawBackground = function () { console.log('bg'); }; // ES6 축약 표기법
    return Button2;
}());
var bu = new Button2();
bu.drawBackground();
bu.drawOutline();
bu.drawText();
var value = 'Hello';
var Value = /** @class */ (function () {
    function Value() {
        this.value = 'world';
    }
    Value.prototype.say = function () {
        console.log(value);
        console.log(this.value);
    };
    return Value;
}());
var v = new Value();
v.say();
// 상속
var Parent = /** @class */ (function () {
    function Parent() {
        this.id = 0;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    return Child;
}(Parent));
// 부모 클래스의 화살표 함수는 super로 접근할 수 없다.
var Parent1 = /** @class */ (function () {
    function Parent1() {
        this.arr = function () {
            console.log('parent arrow function');
        };
    }
    Parent1.prototype.func = function () {
        console.log('parent function');
    };
    return Parent1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.test = function () {
        _super.prototype.func.call(this);
        // super.arr();
    };
    return Child1;
}(Parent1));
var DrawBox = /** @class */ (function () {
    function DrawBox() {
    }
    DrawBox.prototype.onClick = function () {
        console.log('clicked');
    };
    DrawBox.prototype.onScroll = function () {
        console.log('scrolled');
    };
    return DrawBox;
}());
// this
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.hello = function () {
        console.log('hello');
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Derived';
        _this.arrow = function () {
            _super.prototype.hello.call(_this);
            console.log(_this.name);
        };
        return _this;
    }
    Derived.prototype.func = function () {
        _super.prototype.hello.call(this);
        console.log(this.name);
    };
    return Derived;
}(Base));
var d = new Derived();
var obj1 = {
    name: 'Object',
    func: d.func,
    arrow: d.arrow,
};
// 함수의 this -> 자신을 호출한 객체
// 화살표 함수의 this -> 자신이 선언된 객체
obj1.func(); // Object
obj1.arrow(); // Derived
// 함수의 타입
// 타입 정의에서는 매개 변수 이름을 꼭 적어야 한다.
function test3(arg) {
    return arg.toString();
}
var f = test3;
console.log(typeof f(123));
function caller(callback) {
    callback('Hello');
}
function func(str) {
    return str.length;
}
caller(func);
caller(function (str) {
    return 0;
});
// 선택적인 매개변수
function optional1(num) {
    console.log(num); // number | undefined
}
optional1(); // OK
optional1(1); // OK
function optional2(num) {
    if (num === void 0) { num = 0; }
    // default value
    console.log(num);
}
optional2(); // OK - 0
optional2(2); // OK
