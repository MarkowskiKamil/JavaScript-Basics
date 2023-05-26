import styled from "styled-components";

export const Item = styled.div`
  margin: 0.5%;
  box-sizing: border-box;
  background-color: ${(props) => {
    switch (props.type) {
      case "X":
        return "grey";
      case "Y":
        return "black";
      case "0":
        return "floralwhite";
      case "1":
        return "red";
    }
  }};
  width: 40px;
  height: 40px;
 
  `;