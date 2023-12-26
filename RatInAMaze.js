// Consider a rat placed at (0, 0) in a square matrix of order N * N.

// It has to reach the destination at (N - 1, N - 1).
// Find all possible paths that the rat can take to reach from source to destination.
// The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right).
// Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
// Note: In a path, no cell can be visited more than one time.
// If the source cell is 0, the rat cannot move to any other cell.

class Solution {
  static findPathHelper(row, col, m, n, move, result, visited) {
    //Define the break point

    if (row === n - 1 && col === n - 1) {
      result.push(move);
      return;
    }

    // downward direction
    // if the rat is at the second row which is less than the length of the matrix given to us
    // and the rat has not visited that path before and matrix of i,j is a path  that the rat cna pass through
    // and not block, then we move, update visited  an call our recursion for that particular row the rat is.
    //And the moment we reach our destination we stop and unmark or uncheck the visited back to zero or empty
    if (row + 1 < n && !visited[row + 1][col] && m[row + 1][col] === 1) {
      visited[row][col] = 1;
      Solution.findPathHelper(row + 1, col, m, n, move + "D", result, visited);

      visited[row][col] = 0;
    }

    //left
    if (col >= 0 && !visited[row][col - 1] && m[row][col - 1] === 1) {
      visited[row][col] = 1;
      Solution.findPathHelper(row, col - 1, m, n, move + "L", result, visited);
      visited[row][col] = 0;
    }

    //right
    if (col < n && !visited[row][col + 1] && m[row][col + 1] === 1) {
      visited[row][col] = 1;
      Solution.findPathHelper(row, col + 1, m, n, move + "R", result, visited);
      visited[row][col] = 0;
    }

    // upward
    if (row - 1 >= 0 && !visited[row - 1][col] && m[row - 1][col] == 1) {
      visited[row][col] = 1;
      Solution.findPathHelper(row - 1, col, m, n, move + "U", result, visited);
      visited[row][col] = 0;
    }
  }

  findPath(n, m) {
    let result = [];
    let visited = Array.from({ length: n }, () => Array(n).fill(0));
    // if the element  at 0, 0 is === 1, meaning if the first cell is not block, then rat can begin its journey
    if (m[0][0] === 1) Solution.findPathHelper(0, 0, m, n, "", result, visited);

    return result;
  }
  static main() {
    let n = 4; // this is the length of the matrix

    let matrix = [
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ];

    let obj = new Solution();
    const result = obj.findPath(n, matrix);
    if (result.length === 0) {
      console.log(-1);
    } else {
      for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
      }
    }
  }
}

// Time Complexity: O(4^(m*n)), because on every cell we need to try 4 different directions.

// Space Complexity:  O(m*n) ,Maximum Depth of the recursion tree(auxiliary space).
Solution.main();

// But, writing an individual code for every direction is a lengthy process therefore we truncate the 4
// “if statements” into a single for loop using the following approach.

// Thi can be done by  using the deviation in row and columns
// row  = + 1,  +0,  +0 , -1
//  col  = +0,  -1,  +1, +0

console.log("========================================================");

class AnotherSolution {
  findPathHelper(row, col, m, n, move, result, visited, dRow, dCol) {
    // Base case

    if (row === n - 1 && col === n - 1) {
      result.push(move);
      return;
    }

    let direction = "DLRU";
    for (let ind = 0; ind < 4; ind++) {
      // console.log(dRow[index] + " " + dCol[index])
      let nextRow = row + dRow[ind];
      let nextCol = col + dCol[ind];

      if (
        nextRow >= 0 &&
        nextCol >= 0 &&
        nextRow < n &&
        nextCol < n &&
        !visited[nextRow][nextCol] &&
        m[nextRow][nextCol] === 1
      ) {
        visited[row][col] = 1; // the  previus row, col that the rat has already passed
        this.findPathHelper(
          nextRow,
          nextCol,
          m,
          n,
          move + direction[ind],
          result,
          visited,
          dRow,
          dCol
        );
        visited[row][col] = 0;
      }
    }
  }

  findDirection(n, m) {
    let result = [];
    let visited = Array.from({ length: n }, () => Array(n).fill(0));
    const dRow = [1, 0, 0, -1];
    const dCol = [0, -1, 1, 0];

    if (m[0][0] === 1)
      this.findPathHelper(0, 0, m, n, "", result, visited, dRow, dCol);

    return result;
  }
}

let k = 4;

let matr = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

// Time Complexity: O(4^(m*n)), because on every cell we need to try 4 different directions.

// Space Complexity:  O(m*n) ,Maximum Depth of the recursion tree(auxiliary space).
let ob = new AnotherSolution();
let res = ob.findDirection(k, matr);

if (res.length === 0) {
  console.log(-1);
} else {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i] + " ");
  }
  console.log();
}
