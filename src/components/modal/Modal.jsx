import React from "react";
import styled from "styled-components";

const DialogBanner = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #000000c8;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);

  &* {
    z-index: 999;
  }
`;
const DialogImg = styled.div`
  margin: auto;

  & img {
    min-width: 70%;
    max-width: 80%;
    max-height: 100vh;
    border: 1px solid white;
    border-radius: 12px;

    @media (max-width: 700px) {
      width: 90%;
    }
  }
`;

const ModalContainer = ({ openModal, setOpenModal }) => {
  const handlerClose = () => {
    setOpenModal();
  };
  return (
    <DialogBanner onClick={handlerClose}>
      <DialogImg>
        <img src={openModal.img} alt="" />
      </DialogImg>
    </DialogBanner>
  );
};

export const Modal = (props) => {
  //renderizar el modal si se selecciona una imagen
  if (!props.openModal) return null;
  return <ModalContainer {...props} />;
};
