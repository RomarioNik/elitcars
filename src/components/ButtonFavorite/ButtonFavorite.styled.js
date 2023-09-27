import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  color: ${({ favorite }) => (favorite ? "#3470FF" : "#ffffff")};

  &:hover {
    color: #3470ff;
  }
`;
