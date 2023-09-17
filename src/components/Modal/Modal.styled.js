import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 541px;
  padding: 40px;
  margin: 15px;
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  z-index: 99;
  background-color: transparent;
`;
