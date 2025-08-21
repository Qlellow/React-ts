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
