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

//3.

const stringRev = function(str){
  if(str.length === ''){
    return '';
  }
  return stringRev(str.substr(1)) + str.charAt(0);
};