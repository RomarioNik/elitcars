import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, width }) => {
  return <ButtonStyled width={width}>{children}</ButtonStyled>;
};

export default Button;
