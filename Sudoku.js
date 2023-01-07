let unsolvedSudoku = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3],
];
function sudokuSolver(sudoku) {
  let emptySpaces = 81;
  let nonPossibilities = {};
  let impossibleArray;
  
  while (emptySpaces > 0) {
    emptySpaces = 0;
    for (let vertical = 0; vertical < sudoku.length; vertical++) {
      for (let horizontal = 0; horizontal < sudoku.length; horizontal++) {
        if (sudoku[vertical][horizontal] === 0) {
          nonPossibilities = {};
          for (let i = 0; i < 9; i++) {
            if (sudoku[vertical][i] > 0) {
              nonPossibilities[sudoku[vertical][i]] = true;
            }
            if (sudoku[i][horizontal] > 0) {
              nonPossibilities[sudoku[i][horizontal]] = true;
            }
          }
          for (
            let verticalSquare = Math.floor(vertical / 3) * 3;
            verticalSquare < Math.floor(vertical / 3) * 3 + 3;
            verticalSquare++
          ) {
            for (
              let horizontalSquare = Math.floor(horizontal / 3) * 3;
              horizontalSquare < Math.floor(horizontal / 3) * 3 + 3;
              horizontalSquare++
            ) {
              if (sudoku[verticalSquare][horizontalSquare]) {
                nonPossibilities[
                  sudoku[verticalSquare][horizontalSquare]
                ] = true;
              }
            }
          }
          impossibleArray = Object.keys(nonPossibilities);
          if (impossibleArray.length === 8) {
            for (let i = 1; i < 10; i++) {
              if (impossibleArray.indexOf(i.toString()) < 0) {
                sudoku[vertical][horizontal] = i;
              }
            }
          } else {
            emptySpaces++;
          }
        }
      }
    }
  }
  return sudoku;
}

let solvedSudoku = sudokuSolver(unsolvedSudoku);
solvedSudoku.forEach(arr => console.log(arr));
