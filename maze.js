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

const findWayOut = function(maze, position=0, row=0, column=0, path=[], direction='S') {
  if(row >= maze.length || column >= maze[0].length) {
    return;
  }
  if(row < 0 || column < 0) {
    return;
  }
  path[position] = direction
  position++
  if(maze[row][column] === 'e') {
    console.log('We found the path.', path)
    return;
  }
  if(maze[row][column] === ' ') {
    maze[row][column] = 'V'
    findWayOut(maze, position, row, column - 1, path, 'L')
    findWayOut(maze, position, row, column + 1, path, 'R')
    findWayOut(maze, position, row - 1, column, path, 'U')
    findWayOut(maze, position, row + 1, column, path, 'D')
    maze[row][column] = ' '
  }
  position--
}

findWayOut(maze)