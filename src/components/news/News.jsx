import React from "react";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  padding: 4%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DataContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  padding: 4%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 2%;
    flex-direction: column;
  }
`;
const NewsData = styled.div`
  min-width: 15%;
  text-align: center;
  font-family: "Roboto";
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-bottom: 4%;
  }
`;

const News = () => {
  return (
    <>
      <NewsContainer>
        <h2>Proximas Fechas</h2>
        <DataContainer>
          <NewsData>
            <h2>25 septiembre</h2>
            <h2>Expo-vedia</h2>
            <p>18:30Hs</p>
            <p>Vedia - Buenos Aires</p>
          </NewsData>
          <NewsData>
            <h2>8 Octubre</h2>
            <h2>Peña Teatro Porta Pia</h2>
            <p>22:30Hs</p>
            <p>Lincoln - Buenos Aires</p>
          </NewsData>
          <NewsData>
            <h2>16 Noviembre</h2>
            <h2>Peña Sombra Blanca</h2>
            <p>22:30Hs</p>
            <p>Capital Federal - Buenos Aires</p>
          </NewsData>
        </DataContainer>
        <DataContainer>
          <NewsData>
            <h2>17 Noviembre</h2>
            <h2>Peña Los Chaza</h2>
            <p>22:00Hs</p>
            <p>La PLata - Buenos Aires</p>
          </NewsData>
          <NewsData>
            <h2>18 Noviembre</h2>
            <h2>Peña Shacarera</h2>
            <p>22:00Hs</p>
            <p>La PLata - Buenos Aires</p>
          </NewsData>
          <NewsData>
            <h2>20 Noviembre</h2>
            <h2>Fiesta de la Vaquillona</h2>
            <p>19:00Hs</p>
            <p>Germania - Buenos Aires</p>
          </NewsData>
        </DataContainer>
      </NewsContainer>
    </>
  );
};

export default News;
