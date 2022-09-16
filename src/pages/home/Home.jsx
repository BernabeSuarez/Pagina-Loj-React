import React from "react";
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 12rem 4rem;
  color: #ebebeb;
  @media (max-width: 576px) {
    padding: 2%;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-family: "Roboto";
  font-weight: 100;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1rem;
  }
`;
const H1 = styled.h1`
  text-align: center;
  font-family: "Tweaky";
  font-size: 8rem;
  font-weight: 200;
  margin-top: 5rem;
  margin-bottom: 5rem;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 3rem;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    padding: 2%;
    font-size: 1rem;
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
      <Title>Somos</Title>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <H1>La Otra Junta</H1>
      </motion.div>

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
