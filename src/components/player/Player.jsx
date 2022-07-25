import React from "react";
import styled from "styled-components";

const SpotifyPlayer = styled.iframe`
  border-radius: 12px;
  width: 50%;
  height: 80%;
  margin: 2em auto 2em;
`;
const PlayerContainer = styled.div`
  width: 100%;
  height: 80%;
`;
const Player = () => {
  return (
    <PlayerContainer>
      <SpotifyPlayer
        title="spotify"
        src="https://open.spotify.com/embed/artist/1jpoVI9z6RFnhmB5d5SQCw?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></SpotifyPlayer>
    </PlayerContainer>
  );
};

export default Player;
