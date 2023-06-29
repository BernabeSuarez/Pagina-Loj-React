import React from "react";
import styled from "styled-components";
import Reproductor from "../reproductor/Reproductor";
import { Link } from "react-router-dom";

const Title = styled.h2`
  text-align: center;
  color: antiquewhite;
  font-size: 1.5rem;
  margin-bottom: 2%;
`;
const PlayerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Music = () => {
  return (
    <PlayerContainer>
      <Title>Escuchanos</Title>
      <Reproductor />
      <h6>Si te gustaron, podes descargar los temas desde acá</h6>
      <Link to="/downloads">Ir a Descargas</Link>
    </PlayerContainer>
  );
};

export default Music;
