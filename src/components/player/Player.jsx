import React from "react";
import styled from "styled-components";

const SpotifyPlayer = styled.iframe`
  border-radius: 20px;

  width: 50%;
  margin: 2em auto 2em;
  box-shadow: 0 0 3.75rem rgba(111, 252, 193, 0.39);
  @media (max-width: 700px) {
    width: 80%;
  }
`;
const Title = styled.h2`
  text-align: center;
  color: antiquewhite;
  font-size: 1.5rem;
`;
const PlayerContainer = styled.div`
  width: 100%;
  height: 80%;
`;
const Player = () => {
  return (
    <PlayerContainer>
      <Title>Escuchanos en Spotify</Title>
      <SpotifyPlayer
        title="spotify"
        src="https://open.spotify.com/embed/artist/1jpoVI9z6RFnhmB5d5SQCw?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></SpotifyPlayer>
    </PlayerContainer>
  );
};

export default Player;
