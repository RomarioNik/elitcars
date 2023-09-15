import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ButtonMore = styled.button`
  display: flex;
  justify-content: center;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.color.secondary};
  background-color: transparent;
`;
