import React from "react";
import styled from "styled-components";
import Music from "../../components/player/Music";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem 12rem 4rem;
  color: #ebebeb;
  @media (max-width: 576px) {
    padding: 0;
  }
`;
const Listen = () => {
  return (
    <Container>
      <Music />
    </Container>
  );
};

export default Listen;
