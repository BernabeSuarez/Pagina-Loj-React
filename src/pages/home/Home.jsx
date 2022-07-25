import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem 12rem 4rem;
  color: #ebebeb;
  @media (max-width: 576px) {
    padding: 2%;
  }
`;
const Title = styled.h1`
  text-align: center;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1.5rem;
  }
`;
const H2 = styled.h2`
  text-align: center;
  font-family: monospace;
  font-weight: 100;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1.2rem;
  }
`;
const Home = () => {
  return (
    <Container>
      <Title>Bienvenidos a la pagina de La Otra Junta</Title>
      <H2>Pagina en construccion</H2>
    </Container>
  );
};

export default Home;
