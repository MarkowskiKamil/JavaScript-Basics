const getNewCoordinates = (board, currentCoordinates, currentBallPosition) => {
    let newCoordinates = undefined;
    let newRow = currentBallPosition.row + currentCoordinates.row;
    let newColumn = currentBallPosition.column + currentCoordinates.column;
  
    switch (true) {
      case currentCoordinates.row === 1 &&
        currentCoordinates.column === 1 &&
        board[newRow - 1][newColumn] === "X" &&
        board[newRow][newColumn - 1] === "X":
        newCoordinates = { row: -1, column: -1 };
        break;
  
      case currentCoordinates.row === -1 &&
        currentCoordinates.column === -1 &&
        board[newRow + 1][newColumn] === "X" &&
        board[newRow][newColumn + 1] === "X":
        newCoordinates = { row: 1, column: 1 };
        break;
  
      case currentCoordinates.row === 1 &&
        currentCoordinates.column === -1 &&
        board[newRow - 1][newColumn] === "X" &&
        board[newRow][newColumn + 1] === "X":
        newCoordinates = { row: -1, column: 1 };
        break;
  
      case currentCoordinates.row === -1 &&
        currentCoordinates.column === 1 &&
        board[newRow + 1][newColumn] === "X" &&
        board[newRow][newColumn - 1] === "X":
        newCoordinates = { row: 1, column: -1 };
        break;
  
      case board[newRow][newColumn + 1] === "X" &&
        board[newRow][newColumn - 1] === "X":
        newCoordinates = {
          row: -currentCoordinates.row,
          column: currentCoordinates.column,
        };
        break;
  
      case board[newRow - 1][newColumn] === "X" &&
        board[newRow + 1][newColumn] === "X":
        newCoordinates = {
          row: currentCoordinates.row,
          column: -currentCoordinates.column,
        };
        break;
      case (board[newRow][newColumn + 1] === "X" ||
        board[newRow][newColumn - 1] === "X") &&
        board[newRow + -currentCoordinates.row][
          newColumn + currentCoordinates.column
        ] !== "X":
        newCoordinates = {
          row: -currentCoordinates.row,
          column: currentCoordinates.column,
        };
        break;
  
      case (board[newRow - 1][newColumn] === "X" ||
        board[newRow + 1][newColumn] === "X") &&
        board[newRow + currentCoordinates.row][
          newColumn + -currentCoordinates.column
        ] !== "X":
        newCoordinates = {
          row: currentCoordinates.row,
          column: -currentCoordinates.column,
        };
        break;
  
      case board[newRow][newColumn + 1] === "0" &&
        board[newRow][newColumn - 1] === "0":
        newCoordinates = {
          row: -currentCoordinates.row,
          column: currentCoordinates.column,
        };
        break;
  
      case board[newRow + 1][newColumn] === "0" &&
        board[newRow - 1][newColumn] === "0":
        newCoordinates = {
          row: currentCoordinates.row,
          column: -currentCoordinates.column,
        };
        break;
  
      case board[newRow][newColumn] === "X":
        newCoordinates = {
          row: -currentCoordinates.row,
          column: -currentCoordinates.column,
        };
        break;
    }
    return newCoordinates;
  };
  
  export default getNewCoordinates;