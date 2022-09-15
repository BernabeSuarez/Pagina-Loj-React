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
  animation: slide-in-bck-center 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-bck-center {
    0% {
      transform: translateZ(900px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
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
