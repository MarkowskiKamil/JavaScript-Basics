const resetHandler = (
  { initialBoard, initialDirection, initialPositionChecker },
  {
    updateHandler,
    directionHandler,
    positionCheckerHandler,
    counterHandler,
    statusHandler,
    startingPositionStatusHandler,
    triggerHandler,
  }
) => {
  updateHandler(initialBoard);
  directionHandler(initialDirection);
  positionCheckerHandler(initialPositionChecker);
  counterHandler(0);
  statusHandler(false);
  startingPositionStatusHandler(false);
  triggerHandler(false);
};

export default resetHandler;
