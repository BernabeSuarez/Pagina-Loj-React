import React from "react";
import styled from "styled-components";
const LyricsContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  backdrop-filter: grayscale(85%) contrast(95%);
`;

const Lyrics = () => {
  return (
    <LyricsContainer>
      <h2 style={{ color: "white" }}>Proximamente...</h2>
    </LyricsContainer>
  );
};

export default Lyrics;
