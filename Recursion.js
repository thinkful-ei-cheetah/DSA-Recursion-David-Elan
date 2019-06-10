'use strict';

//1. Counting Sheep. Write a function that counts how many sheep jump over the fence

const countSheep = function (sheep) {
  if (sheep < 0) {
    return;
  }
  else if (sheep > 0) {
    console.log(`${sheep}: another sheep jump over the fence`);
    countSheep(sheep - 1);
  }
  else {
    console.log('All sheep jumped over the fence');
  }
};

//2. Power Calculator

const powerCalculator = function(base, exp){
  if(exp === 0){
    return base;
  }
  if (exp < 0){
    return 'exponent should be >= 0';
  }
  else {
    return base * powerCalculator(base, exp-1);
  }
};

//3. Reverse a string

const stringRev = function(str){
  if(str.length === ''){
    return '';
  }
  return stringRev(str.substr(1)) + str.charAt(0);
};

//4. nth Triangular Number
const nthTriangularNum = function(n) {
  if(n === 1) {
    return 1
  }
  return n + nthTrianglularNum(n - 1)
}

nthTriangularNum(6) // => 21

//5. String Splitter

const splitStr = function(str, separator) {
  if (str === "") {
    return ""
  }
  const newChar = str[0]
  if (newChar === separator) {
    return splitStr(str.slice(1), separator)
  }
  else {
    return newChar + splitStr(str.slice(1), separator)
  }
}

splitStr('02/20/2020') // => 02202020