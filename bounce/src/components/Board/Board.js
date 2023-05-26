import React from "react";
import Square from "../Square/Square";
import { Board } from "./Board.style.js";

function BoardModule({ board }) {
  let id = 0;
  return (
    <Board>
      {board.map((row) =>
        row.map((column) => <Square key={++id} type={column} />)
      )}
    </Board>
  );
}

export default BoardModule;