import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem 12rem 4rem;
  color: #ebebeb;
`;
const Title = styled.h1`
  text-align: center;
  left: 12rem;
`;
const Home = () => {
  return (
    <Container>
      <Title>Bienvenidos a la pagina de La Otra Junta</Title>
    </Container>
  );
};

export default Home;
