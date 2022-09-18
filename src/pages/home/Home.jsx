import React from "react";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { Container, Title, H1, SocialLink, H2 } from "./homeElements";

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
