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
  background-color: white;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  width: 30%;
  color: black;
  font-family: "tweaky";
  font-size: 1.4rem;
  border-right: 1px solid black;
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
  border-right: 1px solid black;
  @media (max-width: 576px) {
    width: 90%;
    border: none;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinksFooter = styled(SocialLink)`
  border: 1px solid black;
  margin: auto;
  border-radius: 50%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InstaIcon = styled(BsInstagram)`
  font-size: 1.4rem;
  color: black;
  margin: auto;
`;
const YoutubeIcon = styled(BsYoutube)`
  font-size: 1.4rem;
  color: black;
  margin: auto;
`;
const SpotifyIcon = styled(BsSpotify)`
  font-size: 1.4rem;
  color: black;
  margin: auto;
`;

const FooterInfo = styled.div`
  width: 30%;
  & h4 {
    font-family: Montserrat;
    font-weight: 100;
  }
  @media (max-width: 576px) {
    width: 90%;
    margin-bottom: 0.8rem;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <h3>La Otra Junta</h3>
      </FooterLogo>
      <FooterSocial>
        <SocialLinksFooter
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/laotrajunta/"
        >
          <InstaIcon />
        </SocialLinksFooter>
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
        <h4>© Copyright La Otra Junta 2022</h4>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
