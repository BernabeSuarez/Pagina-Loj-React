import React from "react";
import styled from "styled-components";
import NewsBack from "../../assets/img/NewsBack.jpg";
import { dataTour } from "../../data/dataTour";

const NewsContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  padding: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url(${NewsBack});
`;

const DataContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  padding: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2%;
    flex-direction: column;
  }
`;

const TitleTour = styled.h2`
  font-family: "tweaky";
  font-size: 3.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 5%;
  }
`;
const NewsData = styled.div`
  min-width: 30%;
  padding: 1% 5%;
  text-align: left;
  font-family: "Roboto";
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 4%;
    border-bottom: 1px solid black;
  }
`;
const Button = styled.button`
  width: 90%;
  height: 2.3rem;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 2px solid red;
  color: red;
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    red 50%,
    transparent 50%
  ); //para que se pueda mover el color
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.6s ease-in-out;
  &:hover {
    background-position: left bottom; //mueve el color de izq a dere.
    color: white;
    background-color: red;
  }
`;
const News = () => {
  return (
    <>
      <NewsContainer>
        <TitleTour>Proximas Fechas</TitleTour>
        <DataContainer>
          {dataTour.map((item) => (
            <NewsData>
              <h2>{item.date}</h2>
              <h2>{item.name}</h2>
              <p>{item.time}</p>
              <p>{item.place}</p>
              <Button>Como Llegar</Button>
            </NewsData>
          ))}
        </DataContainer>
      </NewsContainer>
    </>
  );
};

export default News;
