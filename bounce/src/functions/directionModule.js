import getRandomCoordinates from "./getRandomCoordinates";
import getNewCoordinates from "./getNewCoordinates";
import updateCoordinates from "./updateCoordinates";

class Direction {
  constructor() {
    this.previousCoordinates = { row: 1, column: 1 };
    this.currentCoordinates = { row: 1, column: 1 };
    this.possibleCoordinates = [
      { row: 1, column: 1 },
      { row: 1, column: -1 },
      { row: -1, column: 1 },
      { row: -1, column: -1 },
    ];
    this.getRandomCoordinates = getRandomCoordinates;
    this.getNewCoordinates = getNewCoordinates;
    this.updateCoordinates = updateCoordinates;
    this.directionChange = false;
  }
  setDirection({ gameBoard, currentBallPosition }, { isY, isX }) {
    this.directionChange = false;
    let updatedCoordinates;

    switch (true) {
      case isY:
        let randomCoordinates = this.getRandomCoordinates(
          this.currentCoordinates,
          this.possibleCoordinates
        );
        updatedCoordinates = this.updateCoordinates(
          this.previousCoordinates,
          this.currentCoordinates,
          randomCoordinates
        );
        this.previousCoordinates = updatedCoordinates.previousCoordinates;
        this.currentCoordinates = updatedCoordinates.currentCoordinates;
        this.directionChange = updatedCoordinates.directionChange;
        break;

      case isX:
        let newCoordinates = this.getNewCoordinates(
          gameBoard,
          this.currentCoordinates,
          currentBallPosition
        );
        updatedCoordinates = this.updateCoordinates(
          this.previousCoordinates,
          this.currentCoordinates,
          newCoordinates
        );

        this.previousCoordinates = updatedCoordinates.previousCoordinates;
        this.currentCoordinates = updatedCoordinates.currentCoordinates;
        this.directionChange = updatedCoordinates.directionChange;
    }
  }
}

export default Direction;
