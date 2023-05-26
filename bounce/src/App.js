import React, { useState, useEffect, useMemo } from "react";

import NavigationModule from "./components/Nav/Nav";
import BoardModule from "./components/Board/Board";

import Board from "./functions/boardModule";
import Update from "./functions/updateModule";
import PositionChecker from "./functions/positionChecker";
import Direction from "./functions/directionModule";

import moveHandler from "./functions/moveHandler";
import setStartingPositionHandler from "./functions/setStartingPositionHandler";
import resetHandler from "./functions/resetHandler";

import StatusContext from "./functions/statusContext";

function App() {
  const initialDirection = new Direction();
  const initialBoard = new Board();
  const initialPositionChecker = new PositionChecker();

  const board = new Board();
  const update = new Update();
  const direction = new Direction();
  const positionChecker = new PositionChecker();

  const [currentPositionChecker, updatePositionChecker] = useState(
    positionChecker
  );
  const positionCheckerHandler = (positionChecker) => {
    updatePositionChecker(positionChecker);
  };

  const [currentDirection, updateDirection] = useState(direction);
  const directionHandler = (direction) => {
    updateDirection(direction);
  };

  const [currentBoard, updateBoard] = useState(board);
  const updateHandler = (board) => {
    updateBoard(board);
  };

  const [counter, setCounter] = useState(0);
  const counterHandler = (counter) => {
    setCounter(counter);
  };

  const [status, setStatus] = useState(false);
  const statusHandler = (status) => {
    setStatus(status);
  };

  const [isStartingPosition, setIsStartingPosition] = useState(false);
  const startingPositionStatusHandler = (status) => {
    setIsStartingPosition(status);
  };

  const [trigger, setTrigger] = useState(false);
  const triggerHandler = (status) => {
    setTrigger(status);
  };

  const handlerPackage = {
    updateHandler,
    positionCheckerHandler,
    directionHandler,
    counterHandler,
    statusHandler,
    triggerHandler,
    startingPositionStatusHandler,
  };

  const initialPackage = {
    initialBoard,
    initialDirection,
    initialPositionChecker,
  };

  const currentPackage = useMemo(
    () => ({
      currentPositionChecker,
      currentDirection,
      currentBoard,
      counter,
    }),
    [currentPositionChecker, currentDirection, currentBoard, counter]
  );

  const providerValue = useMemo(
    () => ({
      status,
      isStartingPosition,
      trigger,
    }),
    [status, isStartingPosition, trigger]
  );

  useEffect(() => {
    if (status) {
      const interval = setInterval(
        () => moveHandler(currentPackage, handlerPackage, update),
        100
      );
      return () => clearInterval(interval);
    }
  });

  return (
    <StatusContext.Provider value={providerValue}>
      <NavigationModule
        counter={counter}
        setStartingPositionHandler={() =>
          setStartingPositionHandler(currentBoard, update, handlerPackage)
        }
        moveHandler={() => setStatus(!status)}
        resetHandler={() => resetHandler(initialPackage, handlerPackage)}
      ></NavigationModule>
      <BoardModule board={currentBoard.gameBoard} />
    </StatusContext.Provider>
  );
}

export default App;
