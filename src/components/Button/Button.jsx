import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, type, btnWidth, click }) => {
  return (
    <ButtonStyled type={type} onClick={click} btnWidth={btnWidth}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
