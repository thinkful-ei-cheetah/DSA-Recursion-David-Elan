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

const powerCalculator = function (base, exp) {
  if (exp === 0) {
    return base;
  }
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  else {
    return base * powerCalculator(base, exp - 1);
  }
};

//3. Reverse a string

const stringRev = function (str) {
  if (str.length === '') {
    return '';
  }
  return stringRev(str.substr(1)) + str.charAt(0);
};

//4. nth Triangular Number
const nthTriangularNum = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + nthTriangularNum(n - 1);
};

nthTriangularNum(6); // => 21

//5. String Splitter

const splitStr = function (str, separator) {
  if (str === '') {
    return '';
  }
  const newChar = str[0];
  if (newChar === separator) {
    return splitStr(str.slice(1), separator);
  }
  else {
    return newChar + splitStr(str.slice(1), separator);
  }
};

splitStr('02/20/2020'); // => 02202020

//6. Fibonacci Sequence 

const fibSeq = function (num) {
  if (num <= 2) {
    return 1;
  }
  return fibSeq(num - 1) + fibSeq(num - 2);
};

fibSeq(5); // => 5

//7. Factorial 
const factorialNum = function (num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialNum(num - 1);
};

factorialNum(5); // => 5 * 4 * 3 * 2 * 1 = 120

//8. Find a way out of the maze (Added last line in last if for number 9)
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const findWayOut = function (maze, position = 0, row = 0, column = 0, path = [], direction = 'S') {
  if (row >= maze.length || column >= maze[0].length) {
    return;
  }
  if (row < 0 || column < 0) {
    return;
  }
  path[position] = direction;
  position++;
  if (maze[row][column] === 'e') {
    // console.log('We found the path.', path);
    return;
  }
  if (maze[row][column] === ' ') {
    maze[row][column] = 'V';
    findWayOut(maze, position, row, column - 1, path, 'L');
    findWayOut(maze, position, row, column + 1, path, 'R');
    findWayOut(maze, position, row - 1, column, path, 'U');
    findWayOut(maze, position, row + 1, column, path, 'D');
    maze[row][column] = ' ';
  }
  position--;
};

findWayOut(maze);

//10. Anagrams
const anagramFinder = function (word) {
  let list = [];
  if (word.length === 1) {
    list.push(word[0]);
    return list;
  }
  for (let i = 0; i < word.length; i++) {
    const prefix = word[i];
    const rest = word.substring(0, i) + word.substring(i + 1);
    let words = anagramFinder(rest);
    for (let j = 0; j < words.length; j++) {
      list.push(prefix + words[j]);
    }
  }
  return list;
};

anagramFinder('axe'); // => axe aex xae xea eax exa

//11. Organization Chart

const facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

const orgChart = function (obj, indent = '') {
  let output = '';
  for (let key in obj) {
    // let indent = '  ';
    output = output + indent + key + '\n';
    output = output + orgChart(obj[key], indent+'     ');
  }
  return output;
};

console.log(orgChart({
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
}));