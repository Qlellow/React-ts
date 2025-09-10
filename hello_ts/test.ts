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
const getLength = (i: string | string[]): number => {
  return i.length;
};

console.log(getLength('Hello')); // 5
const arr = ['Hello', 'World'];
console.log(getLength(arr)); // 2

// 리터럴 타입
// function moveTo(direction: 'left' | 'right' | 'up' | 'down') {
//   console.log(`move to ${direction}`);
// }

// moveTo('left'); // OK
// // moveTo('rihgt'); // ERROR

function setGrade(grade: 1 | 2 | 3) {
  console.log(`Set grade ${grade}`);
}

setGrade(1); // OK
// setGrade(5); // ERROR

// 실습
const setUserType = (id: number, type: 'user' | 'admin') => {
  console.log(`Set the type of [${id}] as ${type}`);
};

setUserType(1, 'user');
setUserType(2, 'admin');

// 객체 타입
function test(arg: { id: number; name: string }) {
  console.log(arg.id, arg.name);
}
const user1 = { id: 1, name: 'user1' };
test(user1);
test({ id: 1, name: 'user2' });

// 타입 별칭
// 원시 타입에 다른 이름을 만들기
type Password = string;

function verifyPassword(password: Password) {
  return password.length > 7;
}

// Union타입에 다른 이름 만들기
type Id = string | number;

function printId(id: Id) {
  console.log(`ID: ${id}`);
}

// 타입 별칭
// type Point = {
//   x: number;
//   y: number;
// };

function print1(point: { x: number; y: number }) {
  console.log(`${point.x}, ${point.y}`);
}
// 둘이 같음
function print2(point: Point) {
  console.log(`${point.x}, ${point.y}`);
}

// 인터페이스
interface Point {
  x: number;
  y: number;
}

function print3(point: Point) {
  console.log(`${point.x}, ${point.y}`);
}

// 타입 별칭과 인터페이스
type T = { id: number; value: string };
interface I {
  id: number;
  value: string;
}

const t: T = { id: 1, value: 'TYPE' };
const i: I = { id: 2, value: 'INTERFACE' };

function testType(arg: T) {
  console.log(`FUNC TYPE ${arg.id}-${arg.value}`);
}
function testInterface(arg: I) {
  console.log(`FUNC INTERFACE ${arg.id}-${arg.value}`);
}

testType(t); // OK
testType(i); // OK. 내부 구조가 같으므로 통과

testInterface(t); // OK. 내부 구조가 같으므로 통과
testInterface(i); // OK

// 함수 추가
type Button = {
  id: number;
  text: string;
  // 다음 두 가지 표기법으로 정의 가능
  onClick: () => void;
  onDraw(): void;
};

const okButton: Button = {
  id: 1,
  text: 'OK',
  // { } 없이 화살표 함수를 추가할 때는 마지막에 ;대신 ,를 대신 사용
  onClick: () => console.log('clicked'),
  onDraw() {
    console.log(`Draw ${this.text} button`);
  },
};

okButton.onClick();
okButton.onDraw();

// 선택적 속성
// 속성 이름 뒤, ?를 추가
function test1(arg: { id: number; name?: string }) {
  console.log(arg.id, arg.name);
}
test1(user1);
test1({ id: 2 }); // OK. 'name' is optional
// 전달하지 않은 속성 -> undefined

// 방법 1
interface PaintOptions {
  color: string;
  width?: number;
  line?: 'solid' | 'dotted' | 'dashed';
}

// function paint(options: PaintOptions) {
//   // Optional property는 별도의 처리 필요
//   const width = options.width == undefined ? 1 : options.width;
//   const line = options.line == undefined ? 'solid' : options.line;
// }

// 방법 2
// Destructuring + default value
function paint({ color, width = 1, line = 'solid' }: PaintOptions) {
  // 별도의 처리 없이 코딩 가능
  console.log(color, width, line);
}

paint({ color: 'red' });

// 읽기 전용 속성
// 객체는 참조 => 원본이 변경될 수 있음
function test2(obj: { readonly id: number; value: string }) {
  // obj.id = 1; // ERROR
  console.log(obj.id);
}

const obj = { id: 1, value: 'hello' };
test2(obj);

// 과잉 속성
interface Paint {
  color?: string;
  line?: 'solid' | 'dotted' | 'dashed';
}
function draw(paint: Paint) {
  console.log(paint.color, paint.line);
}

// draw({colour:'red', line: 'solid'}); // ERROR. 과잉 속성
// TS는 선언되지 않은 속성은 에러를 발생시킴

//제네릭 객체 타입(Generic Object Type)
function middle<T>(arg: T[]): T | undefined {
  const index = Math.floor(arg.length / 2);
  return arg[index];
}

const numArr = [1, 2, 3];
const result = middle(numArr); // result는 number 타입이 됨

const boolArr = [true, true, false];
const result2 = middle(boolArr); // result2는 boolean 타입이 됨

console.log(result);
console.log(result2);

// 클래스
const Point = class {
  // 생성자를 통해 타입을 추론할 수 있는 경우 타입을 생략해도 된다.
  x;
  y;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
};
// class Point {
//   x;
//   y;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// 멤버 속성
class A {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// 축약 표기법
class B {
  constructor(public name: string, public age: number) {}
}
const a = new A('a', 10);
const b = new B('b', 20);

// 멤버 함수
// prettier-ignore
class Button2 {
  drawBackground() { console.log('bg') } // ES6 축약 표기법
  drawOutline = function() { console.log('line') }
  drawText = () => { console.log('text') }
}
const bu = new Button2();
bu.drawBackground();
bu.drawOutline();
bu.drawText();

const value = 'Hello';
class Value {
  value = 'world';
  say() {
    console.log(value);
    console.log(this.value);
  }
}

const v = new Value();
v.say();

// 상속
class Parent {
  id = 0;
}

class Child extends Parent {
  value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }
}

// 부모 클래스의 화살표 함수는 super로 접근할 수 없다.
class Parent1 {
  func() {
    console.log('parent function');
  }
  arr = () => {
    console.log('parent arrow function');
  };
}
class Child1 extends Parent1 {
  test() {
    super.func();
    // super.arr();
  }
}

// 인터페이스
interface ClickHandler {
  onClick(): void;
}
interface ScrollHandler {
  onScroll(): void;
}

class DrawBox implements ClickHandler, ScrollHandler {
  onClick(): void {
    console.log('clicked');
  }
  onScroll(): void {
    console.log('scrolled');
  }
}

// this
class Base {
  hello() {
    console.log('hello');
  }
}
class Derived extends Base {
  name = 'Derived';
  func() {
    super.hello();
    console.log(this.name);
  }
  arrow = () => {
    super.hello();
    console.log(this.name);
  };
}
const d = new Derived();
const obj1 = {
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
function test3(arg: number): string {
  return arg.toString();
}
const f = test3;
console.log(typeof f(123));

function caller(callback: (str: string) => number) {
  callback('Hello');
}

function func(str: string): number {
  return str.length;
}

caller(func);
caller((str: string): number => {
  return 0;
});

// 선택적인 매개변수
function optional1(num?: number) {
  console.log(num); // number | undefined
}
optional1(); // OK
optional1(1); // OK

function optional2(num = 0) {
  // default value
  console.log(num);
}
optional2(); // OK - 0
optional2(2); // OK

// 파라미터 구조 분해
// 객체를 그냥 사용할 경우
function sumObj(obj: { a: number; b: number; c: number }) {
  console.log(obj.a + obj.b + obj.c);
}

// Destructuring
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

type ABC = { a: number; b: number; c: number };
function sumAbc({ a, b, c }: ABC) {
  console.log(a + b + c);
}
sumAbc({ a: 10, b: 3, c: 9 });

