import React from "react";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const NewsBody = styled.div`
  width: 100%;
  height: 50%;
  margin: auto;
  padding: 3% 0;
  //background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  @media (max-width: 768px) {
    padding: 1%;
    margin: 1%;
  }
`;
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & form {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const InputNews = styled.input`
  width: 30rem;
  background-color: #999696;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsLetter = () => {
  return (
    <NewsContainer>
      <NewsBody>
        <h3>
          <span role="img" aria-label="fire">
            🔥
          </span>
          ¡Enterate de las ultimas novedades!
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h3>
        <p>Suscribite a nuestro newsletter y recibí ofertas exclusivas </p>
        <FormContainer>
          <form action="">
            <InputNews type="email" placeholder="Tu Email..." />
            <button>Suscribirse</button>
          </form>
        </FormContainer>
      </NewsBody>
    </NewsContainer>
  );
};

export default NewsLetter;
