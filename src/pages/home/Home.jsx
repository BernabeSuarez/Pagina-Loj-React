import React from "react";
import styled from "styled-components";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
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
  margin-left: 25px;
  color: #ffffff;
  font-size: 2rem;
  transition: 0.5s;
  &:hover {
    color: #f73434c8;
  }
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
        href="https://www.instagram.com/laotrajunta/"
      >
        <BsInstagram />
      </SocialLink>
      <SocialLink
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCNp-QeX7VY7ebufY6R--hGg/featured"
      >
        <BsYoutube />
      </SocialLink>
      <SocialLink
        target="_blank"
        rel="noreferrer"
        href="https://open.spotify.com/artist/1jpoVI9z6RFnhmB5d5SQCw?si=8PEfH4qUSqSOynhA996ISg"
      >
        <BsSpotify />
      </SocialLink>
    </Container>
  );
};

export default Home;
