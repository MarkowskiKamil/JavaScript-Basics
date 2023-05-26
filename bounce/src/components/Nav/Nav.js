import React, { useContext } from "react";

import CounterModule from "../Counter/Counter";
import ButtonModule from "../Button/Button";

import StatusContext from "../../functions/statusContext";

import { Nav } from "./Nav.style"

function Navigation({
  counter,
  setStartingPositionHandler,
  moveHandler,
  resetHandler,
}) {
  const providerValue = useContext(StatusContext);
  return (
    <Nav>
      <CounterModule counter={counter} />
      <ButtonModule
        disabled={providerValue.isStartingPosition}
        type="set"
        onClick={setStartingPositionHandler}
      />
      <ButtonModule
        disabled={!providerValue.isStartingPosition || providerValue.trigger}
        type="move"
        onClick={moveHandler}
        status={providerValue.status}
      />
      <ButtonModule type="reset" onClick={resetHandler} />
    </Nav>
  );
}

export default Navigation;