import React from "react";
import styled from "styled-components";
import NewsPhoto from "../../assets/img/NextEvent.jpg";

const NewsContainer = styled.div`
  width: 60%;
  margin: 4rem auto;
  img {
    width: 50%;
  }
`;
const News = () => {
  return (
    <>
      <NewsContainer>
        <img src={NewsPhoto} alt="proximo evento" />
      </NewsContainer>
    </>
  );
};

export default News;
