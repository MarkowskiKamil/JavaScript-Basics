import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    switch (true) {
      case props.type === "move" && props.status:
        return "red";
      case props.type === "move" && !props.status:
        return "green";
      case props.type === "reset" || props.type === "set":
        return "honeydew";
    }}
  };
  flex-basis: 20%;
  height: 5vh;
  font-weight: 600;
`;