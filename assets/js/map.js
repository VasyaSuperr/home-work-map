"use strict";

//
const numerals = [
  [1, "first"],
  [3, "third"],
];

//
const numeralsMap = new Map(numerals);
console.log(numeralsMap);

//
console.log(`Map size = ${numeralsMap.size}`);
numeralsMap.set(4, "fourth");
numeralsMap.set(5, "fifth");
console.log(numeralsMap);

//
numeralsMap.delete(5);
console.log(numeralsMap);

//
function searchByKey(currentValue, key, map) {
  console.log(`numeralsMap[${key}] = ${currentValue}`);
}

numeralsMap.forEach(searchByKey);

//
// const key = +prompt("Enter the numeral: ", "2");
// console.log(`The numer with key ${key} exists - ${numeralsMap.has(key)}`);

//
const keysNumeralsMap = [...numeralsMap.keys()];
console.log(`Array of keys: `, keysNumeralsMap);

const valuesNumeralsMap = [...numeralsMap.values()];
console.log(`Array of values: `, valuesNumeralsMap);
