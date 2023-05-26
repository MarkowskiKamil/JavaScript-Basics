class Update {
  // constructor() {}
  setStartingPosition(board, coordinates) {
    board.gameBoard[coordinates.row][coordinates.column] = "1";
    board.startBallPosition = {
      row: coordinates.row,
      column: coordinates.column,
    };
  }
  updateBoard(
    { gameBoard, currentBallPosition },
    { previousCoordinates, currentCoordinates, directionChange },
    { isY, isXorYagain }
  ) {
    if (isY) {
      gameBoard[currentBallPosition.row + previousCoordinates.row][
        currentBallPosition.column + previousCoordinates.column
      ] = "0";
    }

    switch (true) {
      case isXorYagain:
        if (gameBoard[currentBallPosition.row][currentBallPosition.column] === "1") {
          gameBoard[currentBallPosition.row][currentBallPosition.column] = "0";
        }
        currentBallPosition.row = currentBallPosition.row + previousCoordinates.row;
        currentBallPosition.column = currentBallPosition.column + previousCoordinates.column;
        break;

      case !isXorYagain && directionChange:
        if (gameBoard[currentBallPosition.row][currentBallPosition.column] === "1") {
          gameBoard[currentBallPosition.row][currentBallPosition.column] = "0";
        }

        currentBallPosition.row =
        currentBallPosition.row + previousCoordinates.row + currentCoordinates.row;
        currentBallPosition.column =
        currentBallPosition.column +
          previousCoordinates.column +
          currentCoordinates.column;

          gameBoard[currentBallPosition.row][currentBallPosition.column] = "1";
        break;

      case !isXorYagain && !directionChange:
        gameBoard[currentBallPosition.row][currentBallPosition.column] = "0";

        currentBallPosition.row = currentBallPosition.row + currentCoordinates.row;
        currentBallPosition.column = currentBallPosition.column + currentCoordinates.column;

        gameBoard[currentBallPosition.row][currentBallPosition.column] = "1";
        break;
    }
  }
}

export default Update;
