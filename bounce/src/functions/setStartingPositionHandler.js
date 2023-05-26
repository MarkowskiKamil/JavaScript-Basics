const setStartingPositionHandler = (
  board,
  update,
  { updateHandler, startingPositionStatusHandler }
) => {
  update.setStartingPosition(board, { row: 1, column: 1 });

  if (!board) {
    return null
}

  board.gameBoard.map((row, index) => {
    if (row.findIndex((element) => element === "1") !== -1) {
      board.currentBallPosition = {
        row: index,
        column: row.findIndex((element) => element === "1"),
      };
    }
  });
  updateHandler({ ...board });
  startingPositionStatusHandler(true);
};

export default setStartingPositionHandler;
