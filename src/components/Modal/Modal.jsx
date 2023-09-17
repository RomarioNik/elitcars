import React, { useEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { createPortal } from "react-dom";
import { BackDrop, ModalWindow, ButtonClose } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onToggleModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onToggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    disableBodyScroll(document.body);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearAllBodyScrollLocks();
    };
  }, [onToggleModal]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackDropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onToggleModal}>
          X
        </ButtonClose>
        {children}
      </ModalWindow>
    </BackDrop>,
    modalRoot
  );
};

export default Modal;
