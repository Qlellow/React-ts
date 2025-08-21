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
