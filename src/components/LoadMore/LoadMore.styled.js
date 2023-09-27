import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ButtonMore = styled.button`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: flex;
  justify-content: center;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.color.secondary};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: transparent;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.btnHover};
  }
`;
