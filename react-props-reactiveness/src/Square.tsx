import React from "react";
import styled from "styled-components";
import { Color } from "./App";

const StyledSquare = styled.div<{ color?: string }>`
  width: 250px;
  height: 250px;
  background-color: ${({ color }) => color ?? "black"};
`

const StyledButton = styled.button`
  outline: none;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, .5);
`

type SquareProps = {
  color?: Color;
  handleButtonClick: () => void
}

export default function Square(props: SquareProps) {
  const { color, handleButtonClick } = props;

  let colorString;

  switch (color) {
    case 1:
      colorString = "blue";
      break;
    case 2:
      colorString = "red";
      break;
    case 3:
      colorString = "orange";
      break;
    case 4:
      colorString = "pink";
      break;
    case 5:
      colorString = "green";
      break;
  }

  return (
    <StyledSquare color={colorString}>
      <StyledButton onClick={() => handleButtonClick()}>
        Click me!
      </StyledButton>
    </StyledSquare>
  )
}