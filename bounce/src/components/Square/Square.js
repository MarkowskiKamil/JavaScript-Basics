import React from "react";
import { Item } from "./Square.style.js";

function Square({ type }) {
  return <Item type={type}></Item>;
}

export default Square;