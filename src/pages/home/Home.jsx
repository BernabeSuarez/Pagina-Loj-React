import React from "react";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";

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
  margin-top: 1rem;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1.2rem;
  }
`;
const SocialLink = styled.a`
  text-decoration: none;
  color: rgba(255, 115, 0, 1);
  font-size: 1.3rem;
`;

const Home = () => {
  return (
    <Container>
      <Title>Bienvenidos a la pagina de La Otra Junta</Title>
      <H2>Pagina en construccion</H2>
      <H2>Seguinos en</H2>
      <SocialLink
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/laotrajuntafolclore/"
      >
        <BsInstagram />
      </SocialLink>
    </Container>
  );
};

export default Home;
