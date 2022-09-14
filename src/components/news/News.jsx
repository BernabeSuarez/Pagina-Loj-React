import React from "react";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 60%;
  margin: 2rem auto;

  img {
    width: 60%;
    box-shadow: -1px 0px 59px -3px rgba(111, 252, 193, 0.39);
  }
  @media (max-width: 700px) {
    width: 90%;
    img {
      width: 60%;
    }
  }
`;
const News = () => {
  return (
    <>
      <NewsContainer>Noticias</NewsContainer>
    </>
  );
};

export default News;
