var userName = 'TS User';
console.log("Hello ".concat(userName));
var str = '';
var num = 1;
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
var plus = function (num1, num2) { return num1 + num2; };
// const value = add(num, num * 10);
var str1 = 'Hello';
var str2 = str1; // OK
var str3 = str1; // OK
// let str4: string = str3; // Error. 원시 타입에 객체를 대입할 수 없음
var n1 = 1;
var n2 = 2;
var n3 = 3;
var n4 = 4;
n1 + n2; // OK
// n1 + n3; // number + Number -> ERROR
// n1 + n4; // Number + Number -> ERROR
var names = ['Alice', 'Bob', 'Eve'];
// 상황에 따른 타입 지정. 이 상황에서 s 는 string입을 추론할 수 있음
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// 추론이 가능할 경우 타입 명시를 생략할 수 있음
// 추론이 불가능한 경우 반드시 타입 명시
var value1 = 1;
var value2 = value1 + 1;
var value3 = 'Hello';
var add = function (arg1, arg2) {
    return arg2 + arg1;
};
var result = add(1, 2);
var check = result > 3;
console.log(result);
console.log(check);
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ['a', 'b', 'c'];
var arr4 = ['a', 'b', 'c'];
var arr5 = [1, 2, 3];
// number[]와 [number]는 다른 뜻
// [number]는 튜플로 다른 특성을 가지므로 주의
// 타입을 명시하지 않은 빈 배열은 any[]가 되므로 주의
// const arr6 = [];
var array = ['Hello', 'World', 'Good', 'Days'];
var array2 = array.map(function (i) {
    return i.length;
});
// let arr: number[] = [];
//
// for (let i = 1; i < 10; i++) {
//   arr.push(i * 2);
// }
// console.log(arr);
var tp1 = [1, 'user', 'u@mail.com', false];
console.log(typeof tp1[2]); // string
var tp2 = [1]; // 튜플. 숫자 타입 아이템 하나만 가지도록 선언.
tp2.push(2); // Push는 되지만
console.log(tp2);
// console.log(tp2[1]); // ERROR - 값을 부를 수 없다.
console.log(typeof tp2[0]); // OK
// 위 선언부에서 아이템을 하나만 지정했기 때문에 index를 통한 Access는 가능하다.
// 튜플 실습
var makeTuple = function (num1, num2) {
    if (num1 > num2)
        return [num2, num1];
    else
        return [num1, num2];
};
var result2 = makeTuple(3, 2);
console.log(result2);
// Union 실습
var getLength = function (i) {
    return i.length;
};
console.log(getLength('Hello')); // 5
var arr = ['Hello', 'World'];
console.log(getLength(arr)); // 2
