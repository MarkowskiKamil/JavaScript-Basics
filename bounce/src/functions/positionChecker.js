class positionChecker {
  constructor() {
    this.isStartingPosition = undefined;
    this.isHundred = undefined;
    this.isY = false;
    this.isX = false;
    this.isXorYagain = false;
  }
  check({ startBallPosition, currentBallPosition }, moves) {
    if (
      currentBallPosition.row === startBallPosition.row &&
      currentBallPosition.column === startBallPosition.column
    ) {
      this.isStartingPosition = true;
    } else if (moves === 100) {
      this.isHundred = true;
    }
  }
  obstacleCheck({ gameBoard, currentBallPosition }, { currentCoordinates }) {
    this.isY = false;
    this.isX = false;

    switch (true) {
      case gameBoard[currentBallPosition.row + currentCoordinates.row][
        currentBallPosition.column + currentCoordinates.column
      ] === "Y":
        this.isY = true;
        break;
      case gameBoard[currentBallPosition.row + currentCoordinates.row][
        currentBallPosition.column + currentCoordinates.column
      ] === "X":
        this.isX = true;
    }
  }

  moveAfter(
    { gameBoard, currentBallPosition },
    { previousCoordinates, currentCoordinates }
  ) {
    this.previousBallPosition = {};
    this.isXorYagain = false;

    if (
      gameBoard[
        currentBallPosition.row + previousCoordinates.row + currentCoordinates.row
      ][
        currentBallPosition.column +
          previousCoordinates.column +
          currentCoordinates.column
      ] === "X" ||
      gameBoard[
        currentBallPosition.row + previousCoordinates.row + currentCoordinates.row
      ][
        currentBallPosition.column +
          previousCoordinates.column +
          currentCoordinates.column
      ] === "Y"
    ) {
      this.isXorYagain = true;
    }
  }
}

export default positionChecker;
