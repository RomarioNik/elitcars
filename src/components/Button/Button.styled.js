import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: ${({ btnWidth }) => btnWidth || "100%"};
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  line-height: 1.42;
  color: var(--White, #fff);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.buttonBg};
`;
