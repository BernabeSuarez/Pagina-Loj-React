import React from "react";
import { dataTour } from "../../data/dataTour";

import {
  NewsContainer,
  TitleTour,
  DataContainer,
  NewsData,
  Button,
  VideoContainer,
} from "./newsElements";

const News = () => {
  return (
    <>
      <VideoContainer>
        <TitleTour>Novedades</TitleTour>
        <iframe
          src="https://www.youtube.com/embed/37hzjtRfr00"
          title="Chacarera del Chilalo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoContainer>
      <NewsContainer>
        <TitleTour>Proximas Fechas</TitleTour>
        <DataContainer>
          {dataTour.map((item) => (
            <NewsData>
              <h2>{item.date}</h2>
              <h2>{item.name}</h2>
              <p>{item.time}</p>
              <p>{item.place}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                <Button>Como Llegar</Button>
              </a>
            </NewsData>
          ))}
        </DataContainer>
      </NewsContainer>
    </>
  );
};

export default News;
