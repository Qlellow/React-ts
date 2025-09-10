// import sayHello from './util.js';
// import { stringValue, numberValue } from './util.js';
// import sayHello, { stringValue, numberValue } from './util.js';
import sayHello, * as util from './util.js';

sayHello('user');
console.log(util.stringValue, util.numberValue);
