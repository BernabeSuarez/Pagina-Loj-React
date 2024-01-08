import React from "react";
import styled from "styled-components";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { SocialLink } from "../../pages/home/homeElements";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  @media (max-width: 576px) {
    background-color: white;
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  width: 30%;
  color: white;
  font-family: "tweaky";
  font-size: 1.4rem;
  border-right: 1px solid white;
  @media (max-width: 576px) {
    display: none;
  }
`;

const FooterSocial = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px solid white;
  @media (max-width: 576px) {
    width: 90%;
    border: none;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinksFooter = styled(SocialLink)`
  border: 1px solid white;
  margin: auto;
  border-radius: 50%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    border: 1px solid black;
  }
`;

const InstaContainer = styled(SocialLinksFooter)`
  background: transparent;
  &:hover {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }
`;
const InstaIcon = styled(BsInstagram)`
  font-size: 1.4rem;
  color: white;
  @media (max-width: 576px) {
    color: black;
    margin: auto;
  }
`;
const YoutubeIcon = styled(BsYoutube)`
  font-size: 1.4rem;
  color: white;
  &:hover {
    color: red;
  }
  @media (max-width: 576px) {
    color: black;
    margin: auto;
  }
`;
const SpotifyIcon = styled(BsSpotify)`
  font-size: 1.4rem;
  color: white;
  &:hover {
    color: #00ee47;
  }
  @media (max-width: 576px) {
    color: black;
    margin: auto;
  }
`;

const FooterInfo = styled.div`
  color: white;
  width: 30%;
  & h4 {
    font-family: Montserrat;
    font-weight: 100;
  }
  @media (max-width: 576px) {
    color: black;
    width: 90%;
    margin-bottom: 0.8rem;
  }
`;

const year = new Date().getFullYear;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <h3>La Otra Junta</h3>
      </FooterLogo>
      <FooterSocial>
        <InstaContainer
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/laotrajunta/"
        >
          <InstaIcon />
        </InstaContainer>
        <SocialLinksFooter
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCNp-QeX7VY7ebufY6R--hGg/featured"
        >
          <YoutubeIcon />
        </SocialLinksFooter>
        <SocialLinksFooter
          target="_blank"
          rel="noreferrer"
          href="https://open.spotify.com/artist/1jpoVI9z6RFnhmB5d5SQCw?si=8PEfH4qUSqSOynhA996ISg"
        >
          <SpotifyIcon />
        </SocialLinksFooter>
      </FooterSocial>
      <FooterInfo>
        <h4>© Copyright La Otra Junta {year} </h4>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
