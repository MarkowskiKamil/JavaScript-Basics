import React, { useContext } from "react";
import StatusContext from "../../functions/statusContext";

import { Button } from "./Button.style.js";

function ButtonModule({ type, onClick, disabled, status }) {
  const providerValue = useContext(StatusContext);

  const content = (() => {
    switch (type) {
      case "set":
        return "Set position";

      case "move":
        if (providerValue.status) {
          return "Stop";
        } else {
          return "Start";
        }

      case "reset":
        return "Reset";
    }
  })();

  return (
    <Button disabled={disabled} type={type} onClick={onClick} status={status}>
      {content}
    </Button>
  );
}

export default ButtonModule;