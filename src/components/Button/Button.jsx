import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, btnWidth, click }) => {
  return (
    <ButtonStyled type="button" onClick={click} btnWidth={btnWidth}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
