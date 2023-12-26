// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Validating Board

//  Now, let’s see how we are validating the sudoku board. After determining a number for a cell(at i’th row, j’th col), we try to check the validity.
//As we know, a valid sudoku needs to satisfy 3 conditions, we can use three loops. But we can do within a single loop itself. Let’s try to understand that.
// We loop from 0 to 8 and check the values – board[i][col](1st condition) and board[row][i](2nd condition), whether the number is already included.
//For the 3rd condition – the expression (3 * (row / 3) + i / 3)
//evaluates to the row numbers of that 3×3 submatrix and the expression (3 * (col / 3) + i % 3) evaluates to the column numbers.
// For eg, if row= 5 and col= 3, the cells visited are

// Intuition:

// Since we have to fill the empty cells with available possible numbers and we can also have multiple solutions, the main intuition is to try every possible way of filling the empty cells. And the more correct way to try all possible solutions is to use recursion. In each call to the recursive function, we just try all the possible numbers for a particular cell and transfer the updated board to the next recursive call.

// Approach:

// Let’s see the step by step approach. Our main recursive function(solve()) is going to just do a plain matrix traversal of the sudoku board. When we find an empty cell, we pause and try to put all available numbers(1 – 9) in that particular empty cell.
//  We need another loop to do that. But wait, we forgot one thing – the board has to satisfy all the conditions, right? So, for that we have another function(isValid()) which will check whether the number we have inserted into that empty cell will not violate any conditions.
//  If it is violating, we try with the next number. If it is not, we call the same function recursively, but this time with the updated state of the board. Now, as usual it tries to fill the remaining cells in the board in the same way.
// Now we’ll come to the returning values. If at any point we cannot insert any numbers from 1 – 9 in a particular cell, it means the current state of the board is wrong and we need to backtrack. An important point to follow is, we need to return false to let the parent function(which is called this function) know that we cannot fill this way. This will serve as a hint to that function, that it needs to try with the next possible number. Refer to the picture below.

class Sudoku {
  static solveSudoku(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        //check if block is empty
        if (board[i][j] === ".") {
          //if yes fill it by finding a valid number

          for (let c = "1"; c <= "9"; c++) {
            //const c = num.toString();
            if (Sudoku.isValid(board, i, j, c)) {
              //Since it  is valid
              board[i][j] = c;

              // Then I will call the solveSudoku again for the  next iteration of c to see if I can place new character i.e from 1 to 9
              // or now check if the updated sudoku is valid ? by checking this sudoku using recursion.
              //                         if yes return true
              //                         if no, backtrack changes and try filling it with a different number.
              if (Sudoku.solveSudoku(board)) return true;
              //if it is not possible, then I will  remove the previous once placed before I backtrack
              else board[i][j] = ".";
            }
          }
          // then I will return false  after i remove the one previously  placed
          return false;
        }
      }
    }

    // if it can  be placed
    return true;
  }

  static isValid(board, row, col, c) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === c) return false;

      if (board[i][col] === c) return false;
      let currentMatrixRow = Math.floor(row / 3);
      let currentMatrixCol = Math.floor(col / 3);
      if (
        board[3 * currentMatrixRow + Math.floor(i / 3)][
          3 * currentMatrixCol + Math.floor(i % 3)
        ] === c
      )
        return false;
    }

    return true;
  }

  static main() {
    let board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];

    Sudoku.solveSudoku(board);

    for (let i = 0; i < 9; i++) {
      let row = board[i].join(" ");
      console.log(row);
    }
  }
}


// Time Complexity: O(9(n ^ 2)), in the worst case, for each cell in the n2 board, we have 9 possible numbers.

// Space Complexity: O(1), since we are refilling the given board itself, there is no extra space required, so constant space complexity.
Sudoku.main();
