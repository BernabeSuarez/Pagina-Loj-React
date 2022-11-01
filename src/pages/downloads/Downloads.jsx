import React from "react";
import styled from "styled-components";
import { Button } from "../../components/news/newsElements";
import Detras from "../../assets/img/Detras.png";
import Parecida from "../../assets/img/Parecida.png";
import Querencia from "../../assets/img/Querencia.png";
import Tema1 from "../../assets/downloads/Detras_del_viento.mp3";
import Tema2 from "../../assets/downloads/La_Parecida.mp3";
import Tema3 from "../../assets/downloads/Querencia_de_mi_sentir.mp3";

const DownContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  backdrop-filter: grayscale(85%) contrast(95%);
`;
const H2 = styled.h2`
  color: #fafafa;
  margin-bottom: 3%;
`;
const AlbumContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2%;
  border-radius: 20px;
  & img {
    width: 90%;
    margin: auto;
    border-radius: 15px;
    box-shadow: -1px 0px 59px -3px rgba(111, 252, 193, 0.39);
  }
  & a {
    width: 85%;
    margin-top: 4%;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
`;
const DownButton = styled(Button)`
  color: white;
  border: 2px solid #e00000;
  background: linear-gradient(
    to right,
    #e00000 50%,
    transparent 50%
  ); //para que se pueda mover el color
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.6s ease-in-out;
  &:hover {
    background-position: left bottom; //mueve el color de izq a dere.
    color: white;
    background-color: #e00000;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Downloads = () => {
  return (
    <DownContainer>
      <H2>Descarga las canciones</H2>
      <Container>
        <AlbumContainer>
          <img src={Detras} alt="Detras del viento" />
          <a href={Tema1} download="Detras del viento.mp3">
            <DownButton>Descargar</DownButton>
          </a>
        </AlbumContainer>
        <AlbumContainer>
          <img src={Parecida} alt="La Parecida" />
          <a href={Tema2} download="La Parecida.mp3">
            <DownButton>Descargar</DownButton>
          </a>
        </AlbumContainer>
        <AlbumContainer>
          <img src={Querencia} alt="Querencia de mi sentir" />
          <a href={Tema3} download="Querencia de mi sentir.mp3">
            <DownButton>Descargar</DownButton>
          </a>
        </AlbumContainer>
      </Container>
    </DownContainer>
  );
};

export default Downloads;
