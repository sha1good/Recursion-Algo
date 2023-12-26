// N Queen Problem | Return all Distinct Solutions to the N-Queens Puzzle
// Problem Statement: The n-queens is the problem of placing n queens on n × n chessboard such that no two queens can attack each other.
//Given an integer n, return all distinct solutions to the n -queens puzzle.
//Each solution contains a distinct boards configuration of the queen’s placement, where ‘Q’ and ‘.’ indicate queen and empty space respectively.

class NQueenProblem {
  static isSafe(row, col, board, n) {
    let duprow = row;
    let dupcol = col;

    //Upper diagonal
    while (row >= 0 && col >= 0) {
      if (board[row][col] === "Q") return false;
      row--;
      col--;
    }

    col = dupcol;
    row = duprow;
    while (col >= 0) {
      if (board[row][col] === "Q") return false;
      col--;
    }

    row = duprow;
    col = dupcol;

    while (row < n && col >= 0) {
      if (board[row][col] === "Q") return false;
      row++;
      col--;
    }
    return true;
  }

  static solve(col, board, result, n) {
    // if the col > n -1  , i.e,  col === n
    if (col === n) {
      result.push([...board]);
      return;
    }

    for (let row = 0; row < n; row++) {
      if (NQueenProblem.isSafe(row, col, board, n)) {
        board[row][col] = "Q";
        NQueenProblem.solve(col + 1, board, result, n);
        //finally I will backtrack
        board[row][col] = ".";
      }
    }
  }
  solveQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    //const board = Array.from({ length: n }, () => ".".repeat(n));
    // start from the first column
    NQueenProblem.solve(0, board, result, n);

    return result;
  }

  static main() {
    const N = 4;

    const obj = new NQueenProblem();
    const answer = obj.solveQueens(N);

    for (let i = 0; i < answer.length; i++) {
      console.log(`Arrangement ${i + 1}`);
      for (let j = 0; j < answer[i].length; j++) {
        console.log(answer[i][j]);
      }
      //console.log();
    }
  }
}

NQueenProblem.main();

// class Solution {
//   isSafe(row, col, board, n) {
//     let duprow = row;
//     let dupcol = col;

//     while (row >= 0 && col >= 0) {
//       if (board[row][col] === "Q") return false;
//       row--;
//       col--;
//     }

//     col = dupcol;
//     row = duprow;
//     while (col >= 0) {
//       if (board[row][col] === "Q") return false;
//       col--;
//     }

//     row = duprow;
//     col = dupcol;
//     while (row < n && col >= 0) {
//       if (board[row][col] === "Q") return false;
//       row++;
//       col--;
//     }
//     return true;
//   }

//   solve(col, board, ans, n) {
//     if (col === n) {
//       ans.push([...board]);
//       return;
//     }
//     for (let row = 0; row < n; row++) {
//       if (this.isSafe(row, col, board, n)) {
//         board[row][col] = "Q";
//         this.solve(col + 1, board, ans, n);
//         board[row][col] = ".";
//       }
//     }
//   }

//   solveNQueens(n) {
//     const ans = [];
//     const board = Array.from({ length: n }, () => ".".repeat(n));
//     this.solve(0, board, ans, n);
//     return ans;
//   }
// }

// const main = () => {
//   const n = 4; // 4x4 grid and 4 queens
//   const obj = new Solution();
//   const ans = obj.solveNQueens(n);
//   for (let i = 0; i < ans.length; i++) {
//     console.log(`Arrangement ${i + 1}`);
//     for (let j = 0; j < ans[0].length; j++) {
//       console.log(ans[i][j]);
//     }
//     console.log();
//   }
// };

// main();
