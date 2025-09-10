function sayHello(name: string) {
  console.log(`Hello, ${name}`);
}

// 파일당 2개 이상 export 할 수 있다.
export const stringValue = 'Test Value';
export const numberValue = 10;

// 파일당 default는 하나만
export default sayHello;
