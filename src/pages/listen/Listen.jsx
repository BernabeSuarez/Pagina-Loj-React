import React from "react";
import styled from "styled-components";
import Player from "../../components/player/Player";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem 12rem 4rem;
  color: #ebebeb;
`;
const Listen = () => {
  return (
    <Container>
      <Player />
    </Container>
  );
};

export default Listen;
