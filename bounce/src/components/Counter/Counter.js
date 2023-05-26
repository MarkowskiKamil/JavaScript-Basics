import React from "react";

import { Counter } from "./Counter.style.js";

function CounterModule({ counter }) {
  return <Counter>Moves: {counter}</Counter>;
}

export default CounterModule;