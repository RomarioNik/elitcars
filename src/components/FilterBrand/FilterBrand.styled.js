import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.filters};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 14px 0 14px 18px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.color.primary};
  outline: none;
  border: none;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.filtersBg};
`;

export const ButtonStyled = styled.button`
  padding: 14px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.filtersBg};
`;

export const ListBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ListWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 14px 8px 14px 18px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.filtersBorder};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.filtersBg};
  box-shadow: 0px 4px 36px 0px ${({ theme }) => theme.color.filtersShadow};
`;

export const List = styled.ul`
  max-height: 244px;
  overflow: auto;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ButtonList = styled.button`
  width: 100%;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  line-height: 1.25;
  color: ${({ theme, search, model }) =>
    theme.color[search === model ? "primary" : "select"]};
  outline: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
  }
`;
