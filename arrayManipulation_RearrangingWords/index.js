"use strict";
var _a;
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.unshift((_a = scrambledArray.pop()) !== null && _a !== void 0 ? _a : '', ...scrambledArray.splice(2, 4).slice(-2));
console.log(scrambledArray.join(' '));
